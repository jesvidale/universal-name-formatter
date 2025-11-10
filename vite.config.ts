import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  esbuild: {
    // Remove all comments from output
    legalComments: 'none',
    // Drop console statements in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
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
          default:
            return `index.${format}.js`;
        }
      },
      // Output formats (ESM for modern, CJS for legacy systems)
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [],
      output: {
        // Global variables for UMD build
        globals: {},
        // Preserve module structure for better tree-shaking
        preserveModules: false,
        // Compress output
        compact: true,
      },
    },
    // Generate source maps only for development
    sourcemap: process.env.NODE_ENV === 'development',
    // Clean dist folder before build
    emptyOutDir: true,
    // Target modern browsers for smaller output
    target: 'es2022',
    // Aggressive minification settings
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