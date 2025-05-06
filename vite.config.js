// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/',  // must match your repo name exactly, case-sensitive
  plugins: [react()],
});
