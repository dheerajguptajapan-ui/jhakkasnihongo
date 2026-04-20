import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    plugins: [react(), tailwindcss()],
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
