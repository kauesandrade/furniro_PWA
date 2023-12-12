/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'banner': 'url("/imagens/banner.png")'
      },
      height: {
        '720': '720px'
      },
      backgroundColor: {
        'cor1': '#B88E2F',
        'cor2': '#FFF3E3',
        'cor3': '#FCF8F3',
        'cor4': '#FAF3EA',
        'colorCard': '#F4F5F7'
      },
      colors: {
        'txCor1': '#898989',
        'txCor2': '#B88E2F',
        'txCor3': '#9F9F9F',
        'borCor1': '#B88E2F',
        'borCor2': '#D9D9D9'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

