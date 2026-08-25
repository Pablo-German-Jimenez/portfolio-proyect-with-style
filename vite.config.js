import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Portfolio App',
        short_name: 'Portfolio',
        description: 'Portfolio personal',
        theme_color: '#0288d1',
        background_color: '#f4f4f9',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=192&auto=format&fit=crop&q=60',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=512&auto=format&fit=crop&q=60',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 16 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://images.unsplash.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'imagenes-catalogo',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});