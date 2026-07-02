# Bioma — bioma.co.in

Brochure/credibility website for **Bioma**, a Hyderabad company building serviced farm plot
communities in the G.O. 111 countryside. Projects: **Elite 18** (Yelkaguda, Moinabad) and
**Anthara** (coming soon).

Design direction: *1c "Laterite"* — editorial land-ledger. Ink `#211b16`, laterite `#9e3d20`,
paper `#f3ede2`; Italiana display, Newsreader body, IBM Plex Mono data labels.

## Stack

- [Astro](https://astro.build) static site, zero client JS except a scroll-reveal observer
- Self-hosted fonts via Fontsource
- Deployed to GitHub Pages via Actions (`.github/workflows/deploy.yml`)

## Develop

```sh
npm install
npm run dev      # local dev at /bioma base path
npm run build    # production build to dist/
npm run preview  # serve the build
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Bioma company page |
| `/elite18` | Elite 18 project page |
| `/anthara` | Anthara coming-soon teaser |
| `/disclaimer` | Marketing disclaimer (draft, pending legal review) |

## Deploying to bioma.co.in later

Set `DEPLOY_SITE=https://bioma.co.in` and `DEPLOY_BASE=/` at build time (see
`astro.config.mjs`), add the custom domain in the Pages settings (or move hosting), and point
DNS at it.

All imagery is an artistic impression. Farm house construction is optional and subject to
G.O. 111 norms.
