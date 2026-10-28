import moment from "moment";

export const DEFAULT_VENUE = "Canongate Kirk, Edinburgh";

// Plain helpers, safe to use in page components (unlike lib/contentful.js,
// which creates the Contentful client and must only run at build time).
export function concertYears(concerts) {
  return [...new Set(concerts.map((c) => c.date.slice(0, 4)))];
}

// Dates are kept as entered in Contentful (no timezone conversion). Some only
// have a day, others a start time too.
export function concertWhen(date) {
  const when = moment.parseZone(date);
  return date.length > 10
    ? when.format("dddd D MMMM, h:mma")
    : when.format("dddd D MMMM");
}
