import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
// Performance optimizations inspired by stockanalysis.com
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Minimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.logs in production
        drop_debugger: true,
      },
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // CSS code splitting
    cssCodeSplit: true,
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Hash-based filenames for aggressive caching (like stockanalysis.com)
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'icons-vendor': ['lucide-react'],
          'helmet-vendor': ['react-helmet-async'],
        },
      },
    },
  },
})
