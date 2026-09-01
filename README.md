This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all the dependencies and then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contentful
Content is hosted on [contentful](https://app.contentful.com/). You will need to set the 
CONTENTFUL_SPACE_ID
CONTENTFUL_DELIVERY_TOKEN

in order to load the page with content from the app.

## Deploy on AWS

Deploy running the deploy command to sync with the host s3 bucket

```bash
npm run deploy
```