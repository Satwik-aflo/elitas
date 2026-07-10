// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site. Override both values in CI for the final repository URL.
export default defineConfig({
  site: process.env.DEPLOY_SITE ?? 'https://satwik-aflo.github.io',
  base: process.env.DEPLOY_BASE ?? '/elitas',
  trailingSlash: 'ignore',
});
