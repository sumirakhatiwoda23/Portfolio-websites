# Sumira Khatiwoda — Portfolio (Next.js)

A Next.js (App Router) rebuild of the original single-page portfolio, ported
into componentized React with all content pulled from `lib/data.js` so it's
easy to update.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/layout.js` — root layout, fonts, metadata
- `app/page.js` — assembles all sections
- `app/globals.css` — all styling, ported 1:1 from the original design
- `components/` — Header, Hero, About, Skills, Projects, Education,
  Achievements, Contact, Footer, plus `ScrollReveal` (the reveal-on-scroll
  IntersectionObserver behavior) and the typing effect in `Hero.jsx`
- `lib/data.js` — all portfolio content (profile, skills, projects,
  education, achievements) — edit this file to update the site

## Build

```bash
npm run build
npm start
```

## Deploy

Ready to deploy as-is on Vercel (`vercel.com/new`) — just import the repo.
