// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://satwik-aflo.github.io/bioma
// When the site moves to bioma.co.in, set DEPLOY_SITE=https://bioma.co.in and DEPLOY_BASE=/
export default defineConfig({
  site: process.env.DEPLOY_SITE ?? 'https://satwik-aflo.github.io',
  base: process.env.DEPLOY_BASE ?? '/bioma',
  trailingSlash: 'ignore',
});
