import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  server: { allowedHosts: true },
  plugins: [react(), VitePWA({ registerType: 'autoUpdate', includeAssets: ['favicon.svg', 'images/greek-temple.jpg'], manifest: { name: 'Agora English', short_name: 'Agora', description: 'A deliberate English practice space', theme_color: '#173f49', background_color: '#f5f3ec', display: 'standalone', start_url: '/', scope: '/', icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }] } })],
})
