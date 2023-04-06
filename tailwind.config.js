/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      red: '#4ed7dd',
      blue: '#f78208'
    },
    extend: {
      fontFamily: {
        'body': ['"Open Sans"', 'sans-serif'],
        'body-other': ['"Open sans', 'Condensed-Regular']
      },
      spaceing: {
        '1/10': '10%'
      }
    },
  },
  plugins: [],
}
