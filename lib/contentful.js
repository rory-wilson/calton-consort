import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

export async function getHomepage() {
  const entry = await client.getEntry('4tephtBTLu82pYuuYBeuzZ');
  return entry?.fields ?? null;
}

function assetUrl(asset) {
  return asset?.fields?.file?.url ? "https:" + asset.fields.file.url : null;
}

export async function getConcerts() {
  const entries = await client.getEntries({
    content_type: "concert",
    order: "-fields.date",
    include: 1,
    limit: 1000,
  });
  return entries.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    date: item.fields.date,
    venue: item.fields.venue ?? null,
    description: item.fields.description ?? null,
    imageUrl: assetUrl(item.fields.image),
  }));
}

// Concerts on or after today (at build time) are upcoming, soonest first.
// Past concerts stay newest first.
export async function getConcertsByStatus() {
  const concerts = await getConcerts();
  const today = new Date().toISOString().slice(0, 10);
  return {
    upcoming: concerts.filter((c) => c.date.slice(0, 10) >= today).reverse(),
    past: concerts.filter((c) => c.date.slice(0, 10) < today),
  };
}

function pageSection(entry) {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    kicker: entry.fields.kicker ?? null,
    anchor: entry.fields.anchor ?? null,
    subheading: entry.fields.subheading ?? null,
    imageUrl: assetUrl(entry.fields.image),
    body: entry.fields.body ?? null,
  };
}

// Sections that are linked but unpublished come back unresolved (no fields),
// so they're dropped.
export async function getPage(slug) {
  const entries = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    include: 2,
    limit: 1,
  });
  const page = entries.items[0];
  if (!page) throw new Error(`No Contentful page with slug "${slug}"`);
  const sections = (list = []) =>
    list.filter((s) => s?.fields).map(pageSection);
  return {
    title: page.fields.title,
    headerImageUrl: assetUrl(page.fields.headerImage),
    intro: page.fields.intro ?? null,
    sections: sections(page.fields.sections),
    sidePanel: sections(page.fields.sidePanel),
  };
}
