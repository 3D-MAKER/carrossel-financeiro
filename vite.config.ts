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
  },
  define: {
    // Define a chave de API globalmente para ser acessível via process.env.API_KEY
    'process.env.API_KEY': JSON.stringify("AIzaSyCVYy04J3YXLSbU7e6hCNZ7LkGH3LRl8UY")
  }
});