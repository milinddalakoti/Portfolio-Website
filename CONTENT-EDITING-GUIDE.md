# Content Editing Guide

Edit any text, date, metric, or label here — then rebuild (`npm run build`).

> **Never edit inside `dist/`** — that folder is generated. All edits below point to source files in `src/`.
>
> **After editing any file, restart the dev server or run `npm run build`** to see changes.
>
> **Avoid the `rounded-[50px]` corruption:** if you paste text from the built site, never accept strings like `rounded-[50px]class` or `rounded-[50px]of` inside word bodies. These are CSS-class artifacts that leak into text. If you see them, delete the `rounded-[50px]` token and restore the original separator (hyphen or space).

---

## 1. Project cards (Selected work)

All four projects live in `src/content/projects/*.mdx`. Each file has a YAML frontmatter block at the top (between `---` markers). Edit fields there.

### File map

| Project | File |
|---|---|
| PPO RL Agent | `src/content/projects/ppo-rl-cuphead.mdx` |
| Quantum Brain Tumor | `src/content/projects/quantum-brain-tumor.mdx` |
| EMNIST NN | `src/content/projects/emnist-from-scratch.mdx` |
| Wikidata PyKEEN | `src/content/projects/wikidata-pykeen.mdx` |

### Frontmatter fields (same in every file)

| Field | What it controls | Example |
|---|---|---|
| `title:` | Card heading + page `<title>` | `title: "PPO Reinforcement Learning Agent for Cuphead Boss Combat"` |
| `summary:` | Card subtext + meta description | `summary: "Trained a Recurrent PPO ... 77,000 episodes ..."` |
| `date:` | Card date label + deep-page date ("Aug 2026") | `date: 2026-08-15` |
| `role:` | Small label under the title | `role: "Solo dissertation project"` |
| `status:` | Color badge ("Shipped" / "In progress" / "Research" / "Placeholder") | `status: "shipped"` |
| `featured: true` | Whether it appears in the marquee strip | `featured: true` |
| `order: 1` | Display order in the marquee (1 = first/leftmost). Must be unique per project. | `order: 1` |

### Metrics

Each project lists metrics as a sub-array:

```yaml
metrics:
  - label: "Episodes trained"
    value: "77,000"
```

- `label:` → the metric name shown on the card
- `value:` → the number displayed

**PPO only** — to change the total episode count, update `value: "77,000"` in the metrics block **and** the numbers in `summary:` and the body text line starting with `4. **___ training episodes**`.

### Stack tags

```yaml
stack:
  - Python
  - PyTorch
```

Add/remove lines to change the tags shown in the `<ul class="chip">` list.

### Body text

Everything **after** the closing `---` is body Markdown. Edit freely — headings (`##`), bullet lists (`- **bold** text`), paragraphs.

---

## 2. Experience timeline (Selected work section, homepage)

File: `src/pages/index.astro`

The `experience` array is in the frontmatter (top of file, inside the `---` block). Each entry:

```js
{
  role: "Production Analyst",     // Job title
  org: "JP Morgan",               // Company name
  period: "2023 — 2024",          // Employment period
  location: "Bengaluru, IN",      // City, country code
  bullets: [
    "Led biannual System Resiliency Tests across APAC region.",
    // Add/remove bullet items here
  ],
},
```

**Two entries exist:** JP Morgan (first) and Wiley (second). Add a third entry by copying the `{ ... }` block and separating with a comma.

---

## 3. Education section

File: `src/pages/index.astro`

The `education` array sits right below `experience` in the frontmatter:

```js
const education = [
  {
    role: "M.Sc. in Computer Science (Artificial Intelligence)",
    org: "University of Galway",
    period: "2025 — Present",
    location: "Galway, IE",
    bullets: [
      "Specialisation: Machine Learning ...",
    ],
  },
  // Undergraduate entry follows
];
```

---

## 4. "Now" section (What I'm working on)

File: `src/pages/index.astro`

The `nowSections` array is in the frontmatter:

```js
const nowSections = [
  {
    title: "Research",
    items: [
      "Exploring quantum kernel methods ...",
    ],
  },
];
```

Edit `title`, add/remove `items` arrays.

---

## 5. Navigation links

File: `src/data/nav-slots.ts`

Controls the order and visibility of sections in the desktop nav (`#/home`, `#/now`, `#/projects`, etc.) and the mobile dock:

```ts
export const navSlots = [
  { id: "home", label: "Home",     n: 1 },
  { id: "now",   label: "Now",     n: 2 },
  { id: "projects", label: "Projects", n: 3 },
  { id: "skills", label: "Skills",   n: 4 },
  { id: "education", label: "Education", n: 6 },
  { id: "contact", label: "Get in touch", n: 7 },
];
```

- Change `label:` to rename a nav item
- Remove an entry to hide it from both desktop and mobile nav
- The `n:` value controls numeric display (e.g., "02") — keep sequential

---

## 6. Footer text

File: `src/components/Footer.astro`

- Change `"Hosted on GitHub Pages"` (currently replaces the old "Built with Astro + Cloudflare")
- Copyright line: `"© {year} Milind Dalakoti"` — update year manually
- Social links: edit `href` values in `<a>` tags

---

## 7. Writing / Posts

File: `src/content/posts/*.mdx`

Post frontmatter:

```yaml
title: "Building a Mini-RAG Reader from scratch"
date: 2026-09-02
```

- `title:` → post heading
- `date:` → publication date

Body content lives after the `---` block, same as projects.

---

## 8. Theme toggle & colors

File: `src/styles/global.css`

### Light / dark token values (CSS variables)

```css
:root {
  --color-cream:    #f5f1e4;  /* canvas background — light */
  --color-ink:      #2c2e2a;  /* primary text — light */
  --color-accent:   #8ed462;  /* green accent — both themes */
  ...
}

html[data-theme="dark"] {
  --color-cream:    #0c0c0e;  /* canvas — dark */
  --color-ink:      #f4f1ea;  /* text — dark */
  ...
}
```

Edit hex values here to change the palette. All components reference these tokens (`bg-cream`, `text-ink`, `text-accent`, etc.) — they auto-update in both themes.

### Default theme

File: `src/layouts/Layout.astro`, inside the inline `<script>` (pre-paint block):

```js
var mode = stored === "light" || stored === "dark" || stored === "system" ? stored : "light";
```

Change `"light"` to `"dark"` to default to dark mode on first load.

---

## 9. Quick checklist after editing

1. ✅ Save the file
2. ✅ Run `npm run build` (or restart `npx astro dev`)
3. ✅ Check `dist/` for 13 HTML files and no `dist/.netlify/` or `dist/functions/` folders
4. ✅ Verify no `rounded-[50px]` text appears in browser
5. ✅ Verify no Marquee moving strip renders

---

## 10. Gotchas

- **Don't rename `.mdx` files** without renaming the `id` in the frontmatter — project deep pages are routed by filename (e.g., `ppo-rl-cuphead.mdx` → `/projects/ppo-rl-cuphead/`).
- **Keep `order:` unique** (1, 2, 3, …) — duplicates will sort unpredictably.
- **Metrics `value:` strings** are display-only — format as you like (e.g., `"84.31%"`, `"22×"`, `"77,000"`).
- **Hyphens in YAML** — `date: 2026-08-15` must stay hyphen-delimited.
- **The `existing-` prefix in GitHub URLs** in frontmatter is part of the repo path — don't remove unless you've renamed the GitHub folder.
