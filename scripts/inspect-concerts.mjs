// Read-only: prints the `concert` content type and its existing entries.
// Usage: node scripts/inspect-concerts.mjs  (needs CONTENTFUL_SPACE_ID and
// CONTENTFUL_MANAGEMENT_TOKEN in .env)
import "dotenv/config";
import { createClient } from "contentful-management";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN } = process.env;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";

const client = createClient(
  { accessToken: CONTENTFUL_MANAGEMENT_TOKEN },
  { type: "plain", defaults: { spaceId: CONTENTFUL_SPACE_ID, environmentId: ENVIRONMENT } }
);

const contentType = await client.contentType.get({ contentTypeId: "concert" });
console.log(`Content type "${contentType.name}" (display field: ${contentType.displayField})`);
console.table(
  contentType.fields.map((f) => ({
    id: f.id,
    name: f.name,
    type: f.type === "Link" || f.type === "Array" ? `${f.type}<${f.linkType || f.items?.linkType || f.items?.type}>` : f.type,
    required: f.required,
    localized: f.localized,
    disabled: f.disabled || false,
  }))
);

const entries = await client.entry.getMany({
  query: { content_type: "concert", limit: 1000 },
});
console.log(`\n${entries.total} existing entries:`);
for (const e of entries.items) {
  const status = e.sys.archivedVersion
    ? "archived"
    : e.sys.publishedVersion
      ? e.sys.version > e.sys.publishedVersion + 1 ? "changed" : "published"
      : "draft";
  const summary = Object.fromEntries(
    Object.entries(e.fields).map(([k, v]) => {
      const val = Object.values(v)[0];
      return [k, typeof val === "object" ? JSON.stringify(val).slice(0, 60) : val];
    })
  );
  console.log(`- ${e.sys.id} [${status}]`, summary);
}
