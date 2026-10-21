import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://gustapaz.github.io', base: '/forma-studio', trailingSlash: 'always', integrations: [sitemap()] });
