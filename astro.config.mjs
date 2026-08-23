// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// TODO(client): replace with the real domain once confirmed. This drives
// canonical URLs, the sitemap, and absolute OG image paths — all three will be
// wrong on the live site until it's set.
const SITE = 'https://ajmalkomalam.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
