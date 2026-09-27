# Anish Kumar — Tuition Classes (React)

A professional, responsive website for a tuition teacher who takes classes for
school children (Classes 1–12) in Bhilai. Built with **React 19 + Vite** and
**React Router**.

This project converts the original static HTML portfolio into a modern React
application with a completely redesigned, professional stylesheet.

## Quick start

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
portfolio-react/
├── index.html                # HTML entry + fonts + meta
├── public/assets/images/     # static files (profile.jpg)
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Router + layout
    ├── data/siteData.js      # ⭐ ALL site content (edit me)
    ├── components/           # Navbar, Footer, Icons, SectionHeader, …
    ├── pages/                # Home, About, Subjects, Schedule, Contact
    └── styles/global.css     # Design system / styles
```

## Customise content

Everything user-facing lives in **`src/data/siteData.js`**:

| What | Where |
| --- | --- |
| Teacher name, phone, email, photo | `TEACHER` object |
| Menu links | `NAV_LINKS` |
| Home stats, features, steps, testimonials | `STATS`, `FEATURES`, `STEPS`, `TESTIMONIALS` |
| Subjects and class groups | `SUBJECTS`, `SUBJECT_GROUPS` |
| Timings and fees | `SCHEDULE_GROUPS`, `FEES`, `FEE_NOTES` |
| Qualifications / certifications | `EDUCATION`, `CERTIFICATIONS` |

### Contact form

The contact form validates input (name, email, message) and then opens the
visitor's email app with a pre-filled message addressed to `TEACHER.email`.
No backend is required.

### Colours & fonts

Edit the design tokens at the top of `src/styles/global.css`:
`--color-primary`, `--color-accent`, `--gradient-hero`, etc. Fonts are loaded
from Google Fonts in `index.html` (Poppins + Inter).

### Replacing the photo

Drop a new photo at `public/assets/images/profile.jpg` (or update the
`TEACHER.image` path in `siteData.js`).

## Deploying

The output of `npm run build` is a static site — deploy `dist/` to any static
host (Netlify, Vercel, GitHub Pages, cPanel). Since the app uses router paths
(`/about`, `/contact`), add a redirect of unknown paths to `index.html` on the
host if needed.