import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      "/api": {
        target: "https://ecommerce-backend-cw7o.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      '/images': {
        target: "http://localhost:3000",
      }
    }
  }
})
