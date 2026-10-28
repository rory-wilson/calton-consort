// Imports scripts/concerts.json into Contentful as `concert` entries, with
// each flyer uploaded as an asset.
//
// Dry run by default. Pass --apply to write.
//   node scripts/import-concerts.mjs
//   node scripts/import-concerts.mjs --apply
//
// Needs CONTENTFUL_SPACE_ID and CONTENTFUL_MANAGEMENT_TOKEN in .env.
// Turn off the Contentful -> GitHub webhook before --apply, otherwise every
// publish triggers a deploy.
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { createClient } from "contentful-management";

const APPLY = process.argv.includes("--apply");
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";

// Maps our data onto the field IDs of the existing `concert` content type.
// Confirm against `node scripts/inspect-concerts.mjs` before running.
const FIELDS = {
  title: "title",
  date: "date",
  description: "description",
  image: "image",
};

const CONTENT_TYPES = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png" };

const client = createClient(
  { accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN },
  {
    type: "plain",
    defaults: { spaceId: process.env.CONTENTFUL_SPACE_ID, environmentId: ENVIRONMENT },
  }
);

// "Composer <i>Work</i>" lines -> Markdown, one line per piece, matching the
// existing entries ("Composer *Work*"). Literal asterisks are escaped.
function markdown(lines) {
  return lines
    .map((line) => line.replace(/\*/g, "\\*").replace(/<\/?i>/g, "*"))
    .join("\n");
}

async function getOrNull(fn) {
  try {
    return await fn();
  } catch (err) {
    if (err.name === "NotFound") return null;
    throw err;
  }
}

async function upsertAsset(concert, assetId, locale) {
  const existing = await getOrNull(() => client.asset.get({ assetId }));
  if (existing?.fields.file?.[locale]?.url) return existing;

  const fileName = path.basename(concert.image);
  const upload = await client.upload.create({}, { file: fs.readFileSync(concert.image) });
  const fields = {
    title: { [locale]: concert.title },
    file: {
      [locale]: {
        contentType: CONTENT_TYPES[path.extname(fileName).toLowerCase()],
        fileName,
        uploadFrom: { sys: { type: "Link", linkType: "Upload", id: upload.sys.id } },
      },
    },
  };
  const asset = existing
    ? await client.asset.update({ assetId }, { ...existing, fields })
    : await client.asset.createWithId({ assetId }, { fields });
  const processed = await client.asset.processForAllLocales({}, asset);
  return client.asset.publish({ assetId }, processed);
}

async function upsertEntry(entryId, fields) {
  const existing = await getOrNull(() => client.entry.get({ entryId }));
  const entry = existing
    ? await client.entry.update({ entryId }, { ...existing, fields })
    : await client.entry.createWithId({ entryId, contentTypeId: "concert" }, { fields });
  return client.entry.publish({ entryId }, entry);
}

const concerts = JSON.parse(fs.readFileSync("scripts/concerts.json", "utf8"));

const locales = await client.locale.getMany({});
const locale = locales.items.find((l) => l.default).code;

const contentType = await client.contentType.get({ contentTypeId: "concert" });
const fieldIds = new Set(contentType.fields.map((f) => f.id));
const missing = Object.values(FIELDS).filter((id) => !fieldIds.has(id));
if (missing.length) {
  console.error(`The concert content type has no field(s): ${missing.join(", ")}`);
  console.error(`It has: ${[...fieldIds].join(", ")}. Update FIELDS or the content type first.`);
  process.exit(1);
}

// Upcoming concerts have no programme yet, so the description can't be required.
const descriptionField = contentType.fields.find((f) => f.id === FIELDS.description);
if (descriptionField.required) {
  if (APPLY) {
    descriptionField.required = false;
    const updated = await client.contentType.update({ contentTypeId: "concert" }, contentType);
    await client.contentType.publish({ contentTypeId: "concert" }, updated);
    console.log(`Made "${FIELDS.description}" optional on the concert content type.`);
  } else {
    console.log(`Would make "${FIELDS.description}" optional on the concert content type.`);
  }
}

// Concerts already in Contentful (not created by this script) are skipped,
// matched on the day of the concert.
const existing = await client.entry.getMany({
  query: { content_type: "concert", limit: 1000 },
});
const existingDays = new Map();
for (const e of existing.items) {
  if (e.sys.id.startsWith("concert-")) continue;
  const date = e.fields[FIELDS.date]?.[locale];
  if (date) existingDays.set(date.slice(0, 10), e);
}

console.log(`${APPLY ? "Importing" : "Dry run:"} ${concerts.length} concerts (locale ${locale})\n`);
let created = 0;
let skipped = 0;
for (const concert of concerts) {
  const day = concert.date.slice(0, 10);
  const entryId = `concert-${day}`;
  const label = `${concert.date.padEnd(16)} ${concert.title}`;

  const clash = existingDays.get(day);
  if (clash) {
    console.log(`SKIP  ${label}  (already in Contentful as ${clash.sys.id})`);
    skipped++;
    continue;
  }

  const fields = {
    [FIELDS.title]: { [locale]: concert.title },
    [FIELDS.date]: { [locale]: concert.date },
  };
  if (concert.programme.length) {
    fields[FIELDS.description] = { [locale]: markdown(concert.programme) };
  }

  if (!APPLY) {
    console.log(`ADD   ${label}  -> ${entryId}${concert.image ? ` + ${concert.image}` : ""}`);
    created++;
    continue;
  }

  if (concert.image) {
    const asset = await upsertAsset(concert, `flyer-${day}`, locale);
    fields[FIELDS.image] = {
      [locale]: { sys: { type: "Link", linkType: "Asset", id: asset.sys.id } },
    };
  }
  await upsertEntry(entryId, fields);
  console.log(`DONE  ${label}  -> ${entryId}`);
  created++;
}

console.log(`\n${APPLY ? "Imported" : "Would import"} ${created}, skipped ${skipped}.`);
if (!APPLY) {
  const sample = concerts.find((c) => c.programme.length > 1);
  for (const sample of concerts.filter((c) => c.programme.some((l) => l.includes("*"))).slice(0, 2)) {
    console.log(`\nSample description (${sample.title}):\n${markdown(sample.programme)}`);
  }
}
