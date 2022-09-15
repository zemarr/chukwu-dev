/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    ...colors,
    extend: {
      colors: {
        mainBlue: '#007FF4',
        faintText: '#8b8b8b',
        mainBg: '#010816'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
