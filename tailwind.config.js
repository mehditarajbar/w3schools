/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      xs:'480px',
      sm:'600px',
      md:'764px',
      lg:'976px',
      xl:'1440px'
    },
    fontFamily: {
      freckle: ['FreckleFace', 'sans-serif'],
    },
    extend:{
      colors:{
        brightRed:'hls(12, 88%, 59%)'
      }
    }
  },
  plugins: [],
}
