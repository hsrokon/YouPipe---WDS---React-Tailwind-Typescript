/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'primary' : '#00FF00',
        'secondary' : '#00FFFF'
      },
      fontFamily: {
        'font1' : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
// ./src/**/*.{html,js}