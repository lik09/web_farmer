import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // modern JS
    outDir: 'dist',
    sourcemap: false, // optional: reduce build size
    chunkSizeWarningLimit: 2000, // increase to 2MB to reduce warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split dependencies into separate chunks
            const parts = id.split('node_modules/')[1].split('/');
            // For scoped packages like @ant-design
            return parts[0].startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0];
          }
        },
        // Optional: keep entry file names clean
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      },
    },
    // Optional: increase max memory for Node build if needed
    // nodeOptions: {
    //   max_old_space_size: 2048,
    // },
  },
  base: '/', // adjust if deploying to subfolder (GitHub Pages)
});