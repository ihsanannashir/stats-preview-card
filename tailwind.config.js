/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': '#090b1a',
        'desaturated-blue': '#1b1938',
        'soft-violet': '#aa5cdb',
        'white-second': 'hsla(0, 0%, 100%, 0.75)',
        'white-third': 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend': ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
}