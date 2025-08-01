import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'



export default defineConfig({

  plugins: [react()],

  test: {

    environment: 'jsdom',   //test run on vsdom

    globals: true,

    setupFiles: ['./src/tests/setup.ts'],

    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

  },

}) 