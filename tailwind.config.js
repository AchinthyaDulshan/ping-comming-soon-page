/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      // ### Primary

    'Blue': 'hsl(223, 87%, 63%)',

      // ### Secondary

    'Pale-Blue': 'hsl(223, 100%, 88%)',
    'Light-Red': 'hsl(354, 100%, 66%)',

      // ### Neutral

    'Gray': 'hsl(0, 0%, 59%)',
    'Very-Dark-Blue': 'hsl(209, 33%, 12%)'
    },
    extend: {
    },
  },
  plugins: [],
}