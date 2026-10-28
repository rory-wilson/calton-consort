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
    limit: 1000,
  });
  return entries.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    date: item.fields.date,
    venue: item.fields.venue ?? null,
    description: item.fields.description ?? null,
    imageUrl: item.fields.image?.fields?.file?.url
      ? "https:" + item.fields.image.fields.file.url
      : null,
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
