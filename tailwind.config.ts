/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        primary: '#789',
        secondary: '#987',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
