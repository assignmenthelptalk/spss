# SPSSassignment.help

Marketing and lead-generation site for an SPSS statistics help service, live at <https://www.spssassignment.help>. Built with [Astro](https://astro.build) and Tailwind CSS v4, and generated as a static site.

The content is organised as a topical map: a home page, a pricing/contact page, and 72 content pages covering statistical tests, service types, academic levels, subject areas, dissertation chapters, and SPSS how-to guides.

## Requirements

- Node.js 22.12.0 or newer

## Commands

Run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Project structure

```text
/
├── public/                  Static assets: favicons, hero images, per-page header images (.webp)
└── src/
    ├── components/          Header.astro, Footer.astro
    ├── content/pages/       One Markdown file per content page (72 pages)
    ├── content.config.ts    Frontmatter schema for the pages collection
    ├── layouts/
    │   ├── Layout.astro     Base HTML: <head>, meta tags, canonical URL, analytics
    │   └── PageLayout.astro Article layout used by every content page
    ├── pages/
    │   ├── index.astro      Home page (includes the FAQ section and FAQPage schema)
    │   ├── get-started.astro Pricing and contact page
    │   └── [...slug].astro  Renders each non-draft Markdown page at /<filename>/
    └── styles/global.css
```

## Adding or editing a content page

Each file in `src/content/pages/` becomes a page at `/<filename>/`. Frontmatter is validated by the schema in [src/content.config.ts](src/content.config.ts):

```yaml
---
title: "One-Way ANOVA Assignment Help"   # meta title; " | SPSS Assignment Help" is appended automatically
description: "…"                          # meta description, 160 characters max
h1: "One-Way ANOVA Assignment Help — SPSS Steps, Post-Hoc Tests, and Reporting"
headerImage: "/one-way-anova.webp"        # optional, file under public/
section: "core"                           # core | outer
pillar: false
pathway: "Parametric Tests"               # optional label shown above the H1
priority: "high"                          # high | medium | low
bridgesTo: ["independent-samples-t-test-assignment-help"]
draft: false                              # pages with draft: true are not built
---
```

Conventions used across the content:

- Keep `title` short and without a brand suffix. [Layout.astro](src/layouts/Layout.astro) appends ` | SPSS Assignment Help` (skipped if the title already contains the brand).
- Every content page links back to the home page from its first paragraph, using the brand name `SPSSassignment.help` as the anchor text.
- Test pages use headings that include the test name, such as "How to Run the Mann-Whitney U Test in SPSS (Step by Step)", rather than generic headings.
- The footer is deliberately minimal (home, pricing, WhatsApp, email) so internal link equity stays concentrated. Navigation to inner pages comes from the header and from in-content links.

## SEO setup

- Canonical domain: `https://www.spssassignment.help` (set as `site` in [astro.config.mjs](astro.config.mjs)).
- `sitemap-index.xml` is generated at build time by `@astrojs/sitemap`.
- Google Search Console verification meta tag and Google Analytics 4 (gtag.js) are in [Layout.astro](src/layouts/Layout.astro).
- The home page carries `FAQPage` JSON-LD generated from the same data as the visible FAQ list in [index.astro](src/pages/index.astro).
- Search Console baseline: a performance export taken on 2026-10-01 (data to 2026-09-28, before the title, footer, FAQ, and APA/tutorial changes). Re-export about four weeks after those changes to compare.

## Status

The 72-page topical map is fully built and live. Current work is SEO tuning based on Search Console data:

- Titles standardised and shortened; internal-link and footer changes applied.
- APA reporting page and the test pages' tutorial sections expanded to match real search queries.
- Still open: 21 pages showed no impressions in the baseline export (including several guide pages with no internal links), so they need internal links and an indexing request.
