import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Set base for GitHub Pages repo at /portfolio-website/
  base: '/portfolio-website/',
  plugins: [react()],
})
