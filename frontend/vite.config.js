import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Expose the server to all interfaces
    port: 10000,      // Set the port Render uses
    strictPort: true, // Ensures Vite fails if the port is taken
  },
})
