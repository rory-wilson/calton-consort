import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

export async function getHomepage() {
  const entry = await client.getEntry('4tephtBTLu82pYuuYBeuzZ');
  return entry?.fields ?? null;
}

export async function getConcerts() {
  const entries = await client.getEntries({
    content_type: "concert",
    order: "-fields.date",
    include: 1,
  });
  return entries.items.map((item) => ({
    id: item.sys.id,
    ...item.fields,
  }));
}