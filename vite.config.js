import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  
  base: '/AmazonHomePageClone/',
   build: {
    outDir: 'dist',
  },
  
  plugins: [
    tailwindcss(),
  ],
})