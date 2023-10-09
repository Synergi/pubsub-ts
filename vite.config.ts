import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/pubsub.ts')),
      name: 'pubsub',
      fileName: 'pubsub',
    },
  },
  plugins: [
    dts({
      outputDir: './dist/types',
      insertTypesEntry: true,
      staticImport: true,
      tsConfigFilePath: './tsconfig.json',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
});
