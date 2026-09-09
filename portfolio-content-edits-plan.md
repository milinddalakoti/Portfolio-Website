# Portfolio content edits plan

## Tasks

### 1. Remove moving strip (ScrollProgress) — DONE
Already done — `<ScrollProgress />` removed from `src/layouts/Layout.astro`.

### 2. Now section: remove Health + Studying, remove Mini-RAG from Shipped
File: `src/pages/index.astro` frontmatter `nowSections`
- Remove the entry with `title: "Studying"`
- Remove the entry with `title: "Health"`
- In "Shipped", remove `"Mini-RAG Reader — 4/4 canonical Q&A pass rate, 14 ms/query on FAISS"`

### 3. Remove project duplication in ProjectMarquee
File: `src/components/ProjectMarquee.astro`
- Template: remove duplicate `<div class="contents" aria-hidden>` block
- Script: remove wrap-around scroll handler, replace with simple `updateCounter()` call
- Script `updateCounter()`: remove `% total` and `if (idx < 0)` logic, add clamp

### 4. Skills: rename title, filter certs, remove metric cards
File: `src/pages/index.astro`
- `"13 lines of proof."` -> `"Certifications."`
- Description -> `"Held certifications from JP Morgan, Wiley, and undergraduate study."`
- Prepend `.filter((c) => c.status === "held")` before `.map` on certs
- Remove the 4 CardTilt metric cards block

### 5. Split experience/education into separate sections
File: `src/pages/index.astro`
- Frontmatter: split `timeline` into `experience` and `education` arrays
- Template: use `experience.map` in experience section
- Add new `<section id="education">` after experience section

File: `src/data/nav-slots.ts`
- Remove Writing slot, add Education slot

### 6. Remove writing section
File: `src/pages/index.astro` — remove `posts` var and writing `<section>`
File: `src/components/Footer.astro` — remove Writing link

### 7. Remove "Why no form?"
File: `src/pages/index.astro` — remove Reveal block + edit intro paragraph

### 8. Replace "Remote" with "Athlone"
File: `src/pages/index.astro` line 570 separator

### 9. Change footer yellow bar color
File: `src/components/Footer.astro` line 6: `bg-sunshine-pop` -> `bg-cream`

## Implementation order
1. nav-slots.ts
2. index.astro (tasks 2,4,5,6,7,8)
3. Footer.astro (tasks 6,9)
4. ProjectMarquee.astro (task 3)
5. Build + verify
