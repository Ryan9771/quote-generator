/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '816px',
    },
    extend: {
      colors: {
        'darkerGreen': '#47958D',
        'darkerBlue': '#5673BA',
        'brown': '#FFD99E',
      },
      backgroundImage: {
        'paper': 'url(/paper-texture.jpg)',
      }
    },
  },
  plugins: [],
}

