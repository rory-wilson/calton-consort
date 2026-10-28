// One-off: pulls the hand-written concerts out of pages/concerts/*.jsx into
// scripts/concerts.json, for review before importing into Contentful.
import fs from "node:fs";
import path from "node:path";
import moment from "moment";

const PAGES_DIR = "pages/concerts";
const OUT_FILE = "scripts/concerts.json";

function attrs(source) {
  const result = {};
  for (const m of source.matchAll(/(\w+)=(?:"([^"]*)"|\{([^}]*)\})/g)) {
    result[m[1]] = m[2] ?? m[3];
  }
  return result;
}

function programmeLines(children) {
  return children
    .split(/<br\s*\/?>/)
    .map((line) =>
      line
        .replace(/<i>(\s*)([\s\S]*?)(\s*)<\/i>/g, "$1<i>$2</i>$3")
        .replace(/<(?!\/?i>)[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter(Boolean);
}

const concerts = [];
for (const file of fs.readdirSync(PAGES_DIR).filter((f) => f.endsWith(".jsx")).sort()) {
  const source = fs.readFileSync(path.join(PAGES_DIR, file), "utf8");
  const headings = [...source.matchAll(/<h2 id="(\d{4})">/g)].map((m) => ({
    index: m.index,
    year: m[1],
  }));

  for (const m of source.matchAll(/<Concert\b([\s\S]*?)>([\s\S]*?)<\/Concert>/g)) {
    const { title, date, imgUrl } = attrs(m[1]);
    const year = headings.filter((h) => h.index < m.index).pop()?.year;
    let lines = programmeLines(m[2]);

    // Upcoming concerts list the day and time instead of a programme.
    let time = null;
    const timeLine = lines.find((l) => /^\w+day .*\d:\d\d[ap]m/.test(l));
    if (timeLine) {
      time = moment(timeLine.match(/(\d{1,2}:\d\d[ap]m)/)[1], "h:mma").format("HH:mm");
      lines = lines.filter((l) => l !== timeLine);
    }

    const day = moment(`${date} ${year}`, ["D MMM YYYY", "D MMMM YYYY"], true);
    if (!day.isValid()) throw new Error(`Bad date "${date} ${year}" in ${file}`);

    concerts.push({
      title,
      date: day.format("YYYY-MM-DD") + (time ? `T${time}` : ""),
      image: imgUrl ? imgUrl.replace(/^\//, "") : null,
      programme: lines,
      source: file,
    });
  }
}

// The 2016 programme was written as one run-on line on the old page.
const BOY_WAS_BORN_2016 = [
  "Jonathan Dove <i>Seek Him That Maketh the Seven Stars</i>",
  "Judith Weir <i>Psalm 148</i>",
  "Benjamin Britten <i>A Boy was Born</i>",
  "Paul Spicer <i>Glory be to God for Dappled Things</i>",
];
const boy2016 = concerts.find((c) => c.date === "2016-11-19");
if (boy2016) boy2016.programme = BOY_WAS_BORN_2016;

concerts.sort((a, b) => a.date.localeCompare(b.date));
fs.writeFileSync(OUT_FILE, JSON.stringify(concerts, null, 2) + "\n");

const byYear = {};
for (const c of concerts) byYear[c.date.slice(0, 4)] = (byYear[c.date.slice(0, 4)] || 0) + 1;
console.log(`Wrote ${concerts.length} concerts to ${OUT_FILE}`, byYear);
for (const c of concerts) {
  if (!c.image) console.warn(`No image: ${c.date} ${c.title}`);
  else if (!fs.existsSync(c.image)) console.warn(`Missing image file: ${c.image}`);
  if (!c.programme.length) console.warn(`No programme: ${c.date} ${c.title}`);
}
