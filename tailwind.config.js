/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '816px',
      'lg': '1024px',
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

