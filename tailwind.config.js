module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      aspectRatio: {
        '16/9': '16/9',
      },
    },
    colors: {
      red: {
        700: '#B91C1C',
        800: '#991B1B'
      },
      grey: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      yellow: {
        700: '#ab9078',
        800: '#503c2a'
      },
      'metal': '#181717',
      'PBABLACK': '#101010',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fill: ['responsive', 'hover', 'focus', 'active'],
      stroke: ['responsive', 'hover', 'focus', 'active'],
          
    },
    fill: ['responsive', 'hover', 'focus', 'active'],
    stroke: ['responsive', 'hover', 'focus'],
    filter: ['responsive', 'hover', 'focus'],
    animation: ['responsive', 'hover', 'focus', 'group-hover'],
    grayscale: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  },
  plugins: []
}
