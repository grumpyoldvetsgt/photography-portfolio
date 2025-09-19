import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Set base to your repository name (with slashes)
  base: '/photography-portfolio/', // <-- replace with your actual repo name
});
