// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  site: 'https://romanlamsal.github.io',
  base: '/endof10',
  vite: {
    plugins: [tailwindcss()],
  },
});
