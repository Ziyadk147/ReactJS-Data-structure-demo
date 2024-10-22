import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa/dist/index.cjs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My React App',
        short_name: 'ReactApp',
        description: 'My awesome React PWA',
        theme_color: '#ffffff',
        icons: [
          {
            "src": "/public/Screenshot 2024-10-22 182616.png",
            "sizes": "192x192",
            "type": "image/png"
          },
        ],
        screenshots: [
          {
            "src": "/public/Screenshot 2024-10-22 182616.png",
            "sizes": "640x480",
            "type": "image/png",
            "form_factor": "wide"
          },
          {
            "src": "public/Screenshot 2024-10-22 182616.png",
            "sizes": "320x480",
            "type": "image/png",
            "form_factor": "mobile"
          }
        ]

      },
      devOptions: {
        enabled: true, // Enable PWA in development mode for testing
      },
     
    }),
  
  ],
  
})
