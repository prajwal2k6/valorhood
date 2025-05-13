import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    open: '/public/index.html', // Auto-open the index.html file
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './public/index.html',
        dashboard: './public/dashboard.html',
      },
    },
  },
})
