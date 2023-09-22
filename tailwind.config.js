/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        zIndex:{
          '2':'2',
          '-1':'-1'
        },
        fontFamily: {
          montserrat: ["Montserrat"],
        },
        colors: {
          'primary': 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
          'darkBlue':'rgba(21, 14, 40, 1)',
          'purple':'rgba(144, 58, 255, 1)',
          'purpish-pink':'rgba(212, 52, 254, 1)',
          'white':'#ffffff',
          'pink':'#FF26B9',
          'gray1':'rgba(255,255,255,0.75)'
        },
        backgroundColor:{
            'primary': 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
            'darkBlue':'rgba(21, 14, 40, 1)',
            'purple':'rgba(144, 58, 255, 1)',
            'pink':'rgba(212, 52, 254, 1)',
            'footer-bg':'#100B20',
        }
      },
    },
    plugins: [],
  }