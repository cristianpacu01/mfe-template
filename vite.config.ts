import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export const config: UserConfig = {
  base: '',
  envPrefix: 'OPTI_',
  css: {},
  define: {
    global: 'window',
  },
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: path.resolve(__dirname, './src/mfe_main.ts'),
      output: {
        format: 'system',
        entryFileNames: 'static/js/main.js',
        assetFileNames: 'assets/[ext]/[name].[ext]',
        chunkFileNames: 'chunks/[name].js',
      },
      preserveEntrySignatures: 'allow-extension',
      external: ['react', 'react-dom'],
    },
  },
  server: {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['X-Requested-With', 'content-type', 'Authorization'],
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig(config);
