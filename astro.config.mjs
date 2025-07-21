import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify';
import vercel from '@astrojs/vercel';

// Detecta entorno por variable
const target = process.env.DEPLOY_TARGET || 'netlify';

const adapter = target === 'vercel' ? vercel() : netlify();

export default defineConfig({
  output: 'server',
  integrations: [react(), vue()],
  vite: { plugins: [tailwindcss()] },
  adapter
});
