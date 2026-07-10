# Elitas website

The public brand and project website for Elitas, a Hyderabad company creating serviced farm
plot communities in the GO 111 countryside.

## Brand system

- Logo: a geometric E formed from a foundation and three cultivated terraces
- Palette: Forest `#14352D`, Limestone `#F2F4EF`, Leaf `#C8DA72`, Mist `#E7EBE4`
- Display: Archivo Variable
- Editorial copy: Newsreader Variable
- Principles: calm confidence, clear hierarchy, real project imagery, mobile-first layouts

The public brand reference is available at `/design-system`.

## Develop

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Elitas company and partner page |
| `/elite18` | Elite 18 project page |
| `/anthara` | Anthara preview |
| `/design-system` | Elitas identity and interface reference |
| `/disclaimer` | Marketing disclaimer pending legal review |

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and publishes the site on every push to
`main`. It derives the GitHub Pages base path from the repository name, so the site works from
any public GitHub repository without hard-coding the final URL.

For a custom domain later, set `DEPLOY_SITE=https://elitas.co.in` and `DEPLOY_BASE=/` during the
build, then configure the domain in the hosting provider.

All project imagery is an artistic impression. Farm house construction is optional and subject
to GO 111 norms.
