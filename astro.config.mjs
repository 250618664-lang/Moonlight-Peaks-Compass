import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://peakscompass.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
