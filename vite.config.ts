import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Base path for your app (used when deploying to a subfolder)
  base: process.env.VITE_BASE_PATH || "/cap-vibe",

  // Optimization settings to exclude specific dependencies
  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  resolve: {
    // Alias '@' to make imports easier
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
