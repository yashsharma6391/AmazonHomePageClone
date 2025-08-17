import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  
  base: '/profile/',
   build: {
    outDir: 'dist',
  },
  
  plugins: [
    tailwindcss(),
  ],
})