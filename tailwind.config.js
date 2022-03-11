const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./public/*",
  ],
  theme: {
    extend: {
      colors: {
        'goldit': '#FFFFFF',
        'grayit': '#D0D6F9',
        'blueit': '#0B0D17',
      },
      fontFamily: {
        'Bellefair': ['Bellefair', 'sans-serif'],
        'Barlow': ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}