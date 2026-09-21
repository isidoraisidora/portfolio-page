import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://isidorakuzmanovska.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});