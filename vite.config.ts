import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*'],
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
      outDir: 'dist',
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      // Entry point for the library
      entry: resolve(__dirname, 'src/index.ts'),
      // Library name for UMD builds
      name: 'UniversalNameFormatter',
      // Output file name pattern
      fileName: (format) => {
        switch (format) {
          case 'es':
            return 'index.esm.js';
          case 'cjs':
            return 'index.js';
          case 'umd':
            return 'index.umd.js';
          default:
            return `index.${format}.js`;
        }
      },
      // Output formats
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [],
      output: {
        // Global variables for UMD build
        globals: {},
        // Preserve module structure for better tree-shaking
        preserveModules: false,
      },
    },
    // Generate source maps
    sourcemap: true,
    // Clean dist folder before build
    emptyOutDir: true,
    // Target modern browsers
    target: 'es2020',
    // Minification
    minify: 'esbuild',
  },
  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // Development server configuration (for preview)
  server: {
    port: 3000,
    open: false,
  },
  // Preview server configuration
  preview: {
    port: 3001,
    open: false,
  },
});