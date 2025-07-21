// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import vue from '@astrojs/vue';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
    },

  integrations: [react(), vue()],

  adapter: node({
    mode: 'standalone'
  })
});