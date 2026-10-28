// Plain helpers, safe to use in page components (unlike lib/contentful.js,
// which creates the Contentful client and must only run at build time).
export function concertYears(concerts) {
  return [...new Set(concerts.map((c) => c.date.slice(0, 4)))];
}
