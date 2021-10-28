const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      ...colors,
      primary: '#212529',
      secondary: '#343a40',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
