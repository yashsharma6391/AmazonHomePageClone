import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  
  base: '/Amazon/',
   build: {
    outDir: 'dist',
  },
  
  plugins: [
    tailwindcss(),
  ],
})