# Rushikesh Naikwadi — Portfolio

Personal portfolio built with **React + Vite**. All content lives in [`src/data/profile.js`](src/data/profile.js) — edit that one file to update text, projects, skills or links.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
```

## Deploy to Vercel

**Option A — GitHub (recommended, auto-deploys on every push)**

1. Create a new GitHub repo (e.g. `portfolio`) and push this folder:
   ```bash
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/rushin-gh/portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the repo. Vercel auto-detects Vite
   (Build: `npm run build`, Output: `dist`). Click **Deploy**.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## After deploying

- Add the URL to **LinkedIn** → Contact info → Website, and to the Featured section.
- Add it on **Naukri** → Accomplishments → Online profile / Work sample.
- Optional: drop your resume PDF into `public/resume.pdf` and set `resumeUrl: '/resume.pdf'` in `profile.js` to show a Resume button.
- Optional: add GitHub links to each project via the `link` field.
# Portfolio
