// One-off: creates the `page` and `pageSection` content types and moves the
// About and Contact page content into them.
//
// Dry run by default. Pass --apply to write.
//   node scripts/create-pages.mjs
//   node scripts/create-pages.mjs --apply
//
// Needs CONTENTFUL_SPACE_ID and CONTENTFUL_MANAGEMENT_TOKEN in .env.
// Safe to re-run: content types are only created if missing, and entries and
// assets use fixed IDs so they're updated rather than duplicated.
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { createClient } from "contentful-management";

const APPLY = process.argv.includes("--apply");
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";

const client = createClient(
  { accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN },
  {
    type: "plain",
    defaults: { spaceId: process.env.CONTENTFUL_SPACE_ID, environmentId: ENVIRONMENT },
  }
);

const MARKDOWN_HELP = "Markdown: *italic*, **bold**, [link text](https://...). Leave a blank line between paragraphs.";

const CONTENT_TYPES = [
  {
    id: "pageSection",
    name: "Page section",
    description: "A titled block of content on a page, e.g. 'Musical Director'.",
    displayField: "title",
    fields: [
      { id: "title", name: "Title", type: "Symbol", required: true },
      { id: "kicker", name: "Kicker", type: "Symbol", required: false,
        help: "Small label shown above the title, e.g. 'Since 2001'." },
      { id: "anchor", name: "Anchor", type: "Symbol", required: false,
        help: "Optional link target, so /about#md jumps to this section. Letters, numbers and dashes only.",
        validations: [{ regexp: { pattern: "^[a-z0-9-]+$" } }] },
      { id: "subheading", name: "Subheading", type: "Symbol", required: false,
        help: "Optional smaller heading under the title, e.g. a person's name." },
      { id: "image", name: "Image", type: "Link", linkType: "Asset", required: false,
        help: "Optional round portrait shown beside the text." },
      { id: "body", name: "Body", type: "Text", required: false, help: MARKDOWN_HELP },
    ],
  },
  {
    id: "page",
    name: "Page",
    description: "A page on the website made up of sections, e.g. About or Contact.",
    displayField: "title",
    fields: [
      { id: "title", name: "Title", type: "Symbol", required: true },
      { id: "slug", name: "Slug", type: "Symbol", required: true,
        help: "Which page this is: 'about' or 'contact'. Changing this unlinks it from the website.",
        validations: [{ unique: true }] },
      { id: "headerImage", name: "Header image", type: "Link", linkType: "Asset", required: false,
        help: "Wide banner image behind the page title." },
      { id: "intro", name: "Intro", type: "Text", required: false,
        help: `Optional larger text at the top of the page. ${MARKDOWN_HELP}` },
      { id: "sections", name: "Sections", type: "Array", required: false,
        items: { type: "Link", linkType: "Entry", validations: [{ linkContentType: ["pageSection"] }] } },
      { id: "sidePanel", name: "Side panel", type: "Array", required: false,
        help: "Optional sections shown as cards beside the main content.",
        items: { type: "Link", linkType: "Entry", validations: [{ linkContentType: ["pageSection"] }] } },
    ],
  },
];

const EMAIL = "caltonconsort@gmail.com";
const mailto = (subject) =>
  `[${EMAIL}](mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""})`;

const ASSETS = {
  "page-about-header": { title: "About page header", file: "static/backgrounds/about.jpg" },
  "page-contact-header": { title: "Contact page header", file: "static/backgrounds/get-in-touch.jpg" },
  "section-choir-image": { title: "Calton Consort", file: "static/img/choir.jpg" },
  "section-md-image": { title: "Rory Wilson", file: "static/img/rory.jpg" },
};

const SECTIONS = {
  "section-about-choir": {
    title: "Calton Consort",
    kicker: "Since 2001",
    anchor: "choir",
    image: "section-choir-image",
    body: `Calton Consort has established itself as one of Edinburgh’s most prominent chamber choirs, performing a varied and challenging repertoire to high acclaim.

Performances are often a cappella and characterised by fresh and dynamic interpretations of works from a wide range of eras, with an emphasis on less frequently performed compositions.

Calton Consort was founded in 2001 by 12 friends, who were also singers, for a concert in aid of a church roof appeal. The choir now comprises around 30 singers and typically performs five concerts a year including appearances at the Edinburgh Festival Fringe.`,
  },
  "section-about-md": {
    title: "Musical Director",
    kicker: "Conductor",
    anchor: "md",
    subheading: "Rory Wilson",
    image: "section-md-image",
    body: `Born in Edinburgh, Rory Wilson is a tenor and choral conductor.

Rory is currently co-director of the chamber choir Coro Edina and has previously been the music director of the Edinburgh University Renaissance Singers. He is also a regular guest conductor at St. Giles’ Cathedral and the Robin Chapel.

Recent projects include: a tour of Orkney and Shetland; Victoria Requiem and Tenebrae Responsories; MacMillan Strathclyde Motets and Carver O Bone Jesu; Brahms Ein Deutsches Requiem; Mozart Requiem; Bach Magnificat and an online concert of Byrd, Bruckner and Stanford.

In 2020 he received a commendation from the Royal Philharmonic Society Inspiration Awards for his work on virtual choirs during the coronavirus pandemic.`,
  },
  "section-contact-singing": {
    title: "Singing with us",
    kicker: "Membership",
    body: `We are currently recruiting for a first tenor.

Entry to the choir is by informal audition. Our members have a wide range of experience of singing in choirs and at least a reasonable level of sight-reading. Anyone interested in becoming a member is welcome to email us at ${mailto()} to be added to our waiting list.`,
  },
  "section-contact-hire": {
    title: "Music hire",
    kicker: "Library",
    body: `We have an [extensive music library](/static/library.pdf) that is available for hire, which we welcome organisations to use and enjoy.

Please email ${mailto()} to ask about borrowing a specific piece from our library.`,
  },
  "section-contact-mailing-list": {
    title: "Concert reminders",
    kicker: "Mailing list",
    body: `We send out one or two emails per concert with information about the concert and a reminder of the date.

To **subscribe**, send an email to ${mailto("Subscribe to CC Email list")} with subject “Subscribe to CC Email list”.

To **unsubscribe**, send an email to ${mailto("Unsubscribe from CC Email List")} with subject “Unsubscribe from CC Email List”.`,
  },
};

const PAGES = {
  "page-about": {
    title: "Meet the Calton Consort",
    slug: "about",
    headerImage: "page-about-header",
    sections: ["section-about-choir", "section-about-md"],
  },
  "page-contact": {
    title: "Get in touch",
    slug: "contact",
    headerImage: "page-contact-header",
    intro: `If you are interested in singing with Calton Consort, buying tickets for our next concert, borrowing some music, or would like to contact us for any other reason, please email ${mailto()}.`,
    sections: ["section-contact-singing", "section-contact-hire"],
    sidePanel: ["section-contact-mailing-list"],
  },
};

const MIME_TYPES = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png" };

async function getOrNull(fn) {
  try {
    return await fn();
  } catch (err) {
    if (err.name === "NotFound") return null;
    throw err;
  }
}

const link = (linkType, id) => ({ sys: { type: "Link", linkType, id } });

async function ensureContentType({ id, name, description, displayField, fields }) {
  if (await getOrNull(() => client.contentType.get({ contentTypeId: id }))) {
    console.log(`content type ${id}: exists, leaving as is`);
    return;
  }
  console.log(`content type ${id}: create (${fields.map((f) => f.id).join(", ")})`);
  if (!APPLY) return;
  const created = await client.contentType.createWithId(
    { contentTypeId: id },
    {
      name,
      description,
      displayField,
      fields: fields.map(({ help, validations = [], ...f }) => ({
        localized: false,
        validations,
        ...f,
      })),
    }
  );
  await client.contentType.publish({ contentTypeId: id }, created);

  // Help text lives on the editor interface, which exists once published.
  const editor = await client.editorInterface.get({ contentTypeId: id });
  editor.controls = (editor.controls || []).map((control) => {
    const help = fields.find((f) => f.id === control.fieldId)?.help;
    return help ? { ...control, settings: { ...control.settings, helpText: help } } : control;
  });
  await client.editorInterface.update({ contentTypeId: id }, editor);
}

async function upsertAsset(assetId, { title, file }, locale) {
  const existing = await getOrNull(() => client.asset.get({ assetId }));
  if (existing?.fields.file?.[locale]?.url) {
    console.log(`asset ${assetId}: exists`);
    return;
  }
  console.log(`asset ${assetId}: upload ${file}`);
  if (!APPLY) return;
  const upload = await client.upload.create({}, { file: fs.readFileSync(file) });
  const fields = {
    title: { [locale]: title },
    file: {
      [locale]: {
        contentType: MIME_TYPES[path.extname(file).toLowerCase()],
        fileName: path.basename(file),
        uploadFrom: link("Upload", upload.sys.id),
      },
    },
  };
  const asset = existing
    ? await client.asset.update({ assetId }, { ...existing, fields })
    : await client.asset.createWithId({ assetId }, { fields });
  const processed = await client.asset.processForAllLocales({}, asset);
  await client.asset.publish({ assetId }, processed);
}

async function upsertEntry(entryId, contentTypeId, data, locale) {
  const fields = {};
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined) continue;
    let resolved = value;
    if (["image", "headerImage"].includes(key)) resolved = link("Asset", value);
    if (["sections", "sidePanel"].includes(key)) resolved = value.map((id) => link("Entry", id));
    fields[key] = { [locale]: resolved };
  }
  const existing = await getOrNull(() => client.entry.get({ entryId }));
  console.log(`${contentTypeId} ${entryId}: ${existing ? "update" : "create"} "${data.title}"`);
  if (!APPLY) return;
  const entry = existing
    ? await client.entry.update({ entryId }, { ...existing, fields })
    : await client.entry.createWithId({ entryId, contentTypeId }, { fields });
  await client.entry.publish({ entryId }, entry);
}

const locales = await client.locale.getMany({});
const locale = locales.items.find((l) => l.default).code;
console.log(`${APPLY ? "Applying" : "Dry run"} (locale ${locale})\n`);

for (const type of CONTENT_TYPES) await ensureContentType(type);
for (const [id, asset] of Object.entries(ASSETS)) await upsertAsset(id, asset, locale);
// Sections before pages, so pages can link to published sections.
for (const [id, section] of Object.entries(SECTIONS)) await upsertEntry(id, "pageSection", section, locale);
for (const [id, page] of Object.entries(PAGES)) await upsertEntry(id, "page", page, locale);

if (!APPLY) {
  console.log(`\nSample body (Concert reminders):\n${SECTIONS["section-contact-mailing-list"].body}`);
}
