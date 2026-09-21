import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://isidoraisidora.github.io',
  base: '/portfolio-page',
  vite: {
    plugins: [tailwindcss()],
  },
});