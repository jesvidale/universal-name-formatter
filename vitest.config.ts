/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    // Test environment
    environment: 'node',
    
    // Global test settings
    globals: true,
    
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov', 'text-summary'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/',
        'dist/',
        'build/',
        'coverage/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/__tests__/**',
        '**/tests/**',
        '**/setupTests.ts',
        '**/reportWebVitals.js',
        '**/demo.html',
        '**/tutorial.html',
        '**/index.html'
      ],
      include: ['src/**/*.{ts,tsx}'],
      all: true,
      thresholds: {
        global: {
          branches: 75,
          functions: 90,
          lines: 85,
          statements: 85
        }
      }
    },
    
    // Test file patterns
    include: [
      'tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      'src/**/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
    ],
    exclude: ['node_modules/', 'dist/', '.idea/', '.git/', '.cache/'],
    
    // Test timeout
    testTimeout: 10000,
    
    // Reporters
    reporters: ['verbose']
  },
  
  // Resolve configuration for tests
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});