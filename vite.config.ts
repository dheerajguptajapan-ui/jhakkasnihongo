import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'prompt',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        manifest: {
          name: 'Jhakkas Nihongo',
          short_name: 'Jhakkas',
          description: 'A cyberpunk-themed Japanese learning app',
          theme_color: '#e11d48',
          background_color: '#000000',
          display: 'standalone',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
          maximumFileSizeToCacheInBytes: 4000000 // 4MB to accommodate larger chunks
        }
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks: {
            'curriculum-n1-n2': [
              './src/lib/curriculum/n1chapter1',
              './src/lib/curriculum/n2chapter1'
            ],
            'curriculum-n3-n4-n5': [
              './src/lib/curriculum/n3chapter1',
              './src/lib/curriculum/n4chapter1',
              './src/lib/curriculum/lesson1'
            ],
            'vendor-react': ['react', 'react-dom'],
            'vendor-ui': ['lucide-react', 'recharts', 'motion']
          }
        }
      },
      chunkSizeWarningLimit: 1000
    }
  };
});
