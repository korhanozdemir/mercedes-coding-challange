/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        gray:{
          milk: "#f8f8f8",
          dark:"#f3f3f3"
        },
      blue:{
        deep: '#3a5379'
      }
    },
  boxShadow:{
    square:'0px 0px 4px 1px rgba(0, 0, 0, 0.25);'
  }},
  variants: {
    backgroundColor: ['even', 'odd'],
  },
  },
  plugins: [],
}

