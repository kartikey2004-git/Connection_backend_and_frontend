import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': 'http://localhost:3000'
    },
  },
  plugins: [tailwindcss(),],
})
