import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  server: { allowedHosts: true },
  plugins: [react(), VitePWA({ registerType: 'autoUpdate', includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'images/greek-temple.jpg'], manifest: { name: 'Agora English', short_name: 'Agora', description: 'A deliberate English practice space', theme_color: '#173f49', background_color: '#f5f3ec', display: 'standalone', orientation: 'portrait-primary', start_url: '/', scope: '/', icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }] } })],
})
