# Portfolio — `milind-dalakoti.pages.dev`

Astro 7.x + Tailwind 4 + MDX, deployed on Cloudflare Pages free tier.

Inspired by chriskalafatis.com (designer minimalism) and cydstumpel.nl (developer scroll narrative).

## Quick reference

- `astro.config.mjs` — Astro config (Tailwind 4 via `@tailwindcss/vite`, MDX, sitemap, Cloudflare adapter).
- `src/styles/global.css` — Tailwind 4 `@theme` tokens + `.reveal` scroll-bound fade-in.
- `src/content.config.ts` — Astro 7 content collections (projects + posts) with `glob` loader.
- `src/content/projects/*.mdx` — 4 existing CV project case studies.
- `src/content/posts/*.mdx` — 1 Week-1 reflection post.
- `src/components/` — Layout, Nav, Footer, ProjectCard, Reveal.
- `src/pages/` — Home, Now, Skills, Experience, Writing, Contact, Plan, plus Projects/[...slug] + posts/[...slug] dynamic routes.

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build
```

Outputs to `dist/client/` (static) — Cloudflare Pages deploys from this dir.

## Design tokens

- Background: `#FAFAF7` (warm cream, chriskalafatis-inspired)
- Text: `#1A1A1A` (near-black)
- Accent: `#FF5B2E` (orange)
- Display font: Instrument Serif (self-hosted via `@fontsource`)
- Body font: Inter (self-hosted via `@fontsource`)
- Hero: `clamp(3.5rem, 9vw, 7.5rem)` (96–128 px desktop)
- Body: `1.125rem / 1.65 line-height`
- Section padding: `clamp(6rem, 12vw, 12rem)`

## Cloudflare Pages setup

1. Push repo to GitHub.
2. Cloudflare dashboard → Pages → Connect to Git → select repo.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Add environment variables (optional): `CLOUDFLARE_BEACON_TOKEN` (Web Analytics token).
6. Custom domain (optional): `milinddalakoti.ie` or `milinddalakoti.dev` via Cloudflare Registrar.

## Open tasks

- Replace `REPLACE_WITH_CLOUDFLARE_BEACON_TOKEN` in `src/layouts/Layout.astro` with real token.
- Add `og-default.png` (1200×630 social-share image).
- Wire GH Actions `deploy-portfolio.yml` secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).