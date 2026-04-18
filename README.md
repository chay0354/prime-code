# Primecode — React

One-page marketing site for Primecode, built with Vite + React 18.

## Quick start

```bash
npm install
npm run dev         # start dev server at http://localhost:5173
npm run build       # production build into dist/
npm run preview     # preview the production build
```

## Project structure

```
primecode-react/
├── index.html            # Vite entry; loads Google Fonts
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          # React root
    ├── App.jsx           # section composition + stat counter effect
    ├── styles.css        # all styles (design tokens, components, responsive)
    ├── hooks/
    │   └── useReveal.js  # IntersectionObserver fade-up on scroll
    └── components/
        ├── Nav.jsx       # sticky header w/ mobile hamburger
        ├── Hero.jsx
        ├── Stats.jsx     # animated counters (see App.jsx)
        ├── Services.jsx
        ├── Cases.jsx
        ├── Process.jsx
        ├── Testimonial.jsx
        ├── CTA.jsx
        ├── Footer.jsx
        └── icons.jsx     # all inline SVG icons
```

## Design system

- **Fonts** — Sora (display), DM Sans (body), loaded from Google Fonts
- **Tokens** — CSS custom properties on `:root` in `styles.css`
- **Accent** — warm amber via oklch, `--accent: oklch(0.74 0.13 68)`
- **Motion** — IntersectionObserver-based reveals, respects `prefers-reduced-motion`

## Deployment

Any static host (Vercel, Netlify, Cloudflare Pages). Build with `npm run build`, deploy `dist/`.

### Vercel (upload/import) settings

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

This repo includes `vercel.json` so Vercel can auto-detect these values and handle SPA routing fallback.
