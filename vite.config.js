import { defineConfig } from 'vite';

// base relativa: el sitio funciona igual en <usuario>.github.io/<repo>/ o en la raíz
export default defineConfig({
  base: './',
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: { three: ['three'] }
      }
    }
  }
});
