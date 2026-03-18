import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    // ADD THIS SECTION BELOW
    allowedHosts: [
      'web-studio-217.cluster-0.preview.emergentcf.cloud'
    ],
    proxy: {
      '/api': {
        target: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001',
        changeOrigin: true,
      }
    }
  }
})
