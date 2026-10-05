# Nikhil Ravi — Portfolio

Personal site for Nikhil Ravi. A static React app built to deploy from GitHub to Vercel with no backend and no environment variables.

Content lives in `src/data/resume.ts`. Update that file when the resume changes. Do not add roles, metrics, or links that are not on the resume.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide

## Local setup

```bash
npm install
npm run dev
```

The dev server prints a local URL. Open it in a browser.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` typechecks with TypeScript, then writes static files to `dist/`.

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, import the GitHub repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Leave environment variables empty. The site does not need any.

Vercel serves the built `index.html` and hashed assets from the site root. There is no client-side router, so no rewrite rules are required.

The downloadable resume is `public/Nikhil-Ravi-Resume.pdf`, served at `/Nikhil-Ravi-Resume.pdf`.
