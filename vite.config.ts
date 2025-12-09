import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Essential for preview environments where the app might be served from a subpath
  base: './',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    host: true, // Listen on all addresses
  }
});
