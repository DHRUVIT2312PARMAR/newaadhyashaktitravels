import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // Mobile devices
      'xs': '320px',    // Extra small phones (iPhone SE, etc.)
      'sm': '375px',    // Small phones (iPhone 12/13 Mini)
      'md': '425px',    // Medium phones (iPhone 12/13/14)
      'lg': '768px',    // Tablets (iPad Mini)
      'xl': '1024px',   // Large tablets (iPad)
      '2xl': '1280px',  // Desktops
      '3xl': '1536px',  // Large desktops
      
      // Additional mobile breakpoints for precise control
      'mobile': '320px',
      'tablet': '768px',
      'desktop': '1024px',
    },
    extend: {
      spacing: {
        'safe': 'var(--safe-area-inset-left)',
      },
    },
  },
  plugins: [],
} satisfies Config
