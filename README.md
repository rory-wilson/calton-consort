# Calton Consort website

The website for [Calton Consort](https://caltonconsort.org.uk), an Edinburgh chamber choir. It's a [Next.js](https://nextjs.org/) site exported as static files and hosted on AWS (S3 + CloudFront). Most content is edited in [Contentful](https://app.contentful.com/).

## Running locally

You need **Node 20 or later**. Older versions fail with errors like `Cannot find module 'node:events'`. With nvm, run `nvm use 22`.

Create a `.env` file in the project root (it's gitignored):

```
CONTENTFUL_SPACE_ID=...
CONTENTFUL_DELIVERY_TOKEN=...
# Only needed for the scripts in scripts/
CONTENTFUL_MANAGEMENT_TOKEN=...
```

The space ID and delivery token are in Contentful under Settings → API keys. The management token is a personal access token (Settings → CMA tokens).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

## Where content lives

| Content | Edited in |
|---|---|
| Concerts (upcoming and past) | Contentful: **Concert** |
| Homepage hero (big image and text at the top) | Contentful: **homepage** |
| About and Contact pages | Contentful: **Page** and **Page section** |
| Hire page, navbar, footer, Listen tracks | Code (`pages/`, `components/`, `static/`) |

### Concerts

Each concert has a title, date, venue, description and flyer image.

- **Date** decides where the concert appears. Concerts dated today or later show on **Concerts → Upcoming** and the homepage "Upcoming concerts" card (the soonest one). Earlier concerts appear in the archive under their year. The year list in the side nav builds itself.
- **Venue** defaults to Canongate Kirk, Edinburgh if left blank. Past concerts only show a venue if one has been entered.
- **Description** is Markdown, one piece per line, e.g. `Arvo Pärt *Magnificat*`.

### About and Contact pages

A **Page** (slug `about` or `contact`) has a header image, an optional intro and a list of **Page sections**. On Contact there's also a side panel, shown as cards. Each section has a title, optional kicker (small label above it), anchor, subheading, portrait image and a Markdown body.

To add a section, create a Page section and add it to the page's Sections list. Drag the list to reorder. On About, the side nav updates automatically.

## Publishing and deploying

The site is rebuilt and deployed by GitHub Actions (`.github/workflows/main.yml`) when:

- code is pushed to `main`
- something is published in Contentful (via a webhook)
- it's 05:00 UTC each day. This moves finished concerts from Upcoming into the archive, so a concert can stay on Upcoming until the morning after.

The build uses the `CONTENTFUL_*` and AWS secrets stored in the GitHub repository settings.

`npm run deploy` also builds and syncs to S3 from your machine. It's a fallback only: unlike CI, it doesn't delete removed files or refresh the CloudFront cache.

## Scripts

`scripts/` holds one-off migrations used to move content into Contentful:

- `extract-concerts.mjs`: pulls the old hand-written concert pages into `concerts.json`
- `import-concerts.mjs`: imports `concerts.json` into Contentful
- `create-pages.mjs`: creates the Page types and the About/Contact content
- `inspect-concerts.mjs`: lists the Concert content type and its entries (read-only)

They run as a dry run unless given `--apply`, and use fixed IDs, so re-running updates entries rather than duplicating them. They need `CONTENTFUL_MANAGEMENT_TOKEN`. **Before any bulk `--apply`, pause the Contentful → GitHub webhook** (Contentful → Settings → Webhooks). Otherwise every published item triggers its own deploy. Turn it back on afterwards.
