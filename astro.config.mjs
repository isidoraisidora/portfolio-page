import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://isidoraisidora.github.io',
  base: '/portfolio-page',
  integrations: [tailwind()],
});