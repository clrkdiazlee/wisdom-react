/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroPattern': "url('/images/heroPattern.svg')",
        'aboutBg': "url('/images/aboutBg.svg')",
        'aboutBgWhite': "url('/images/aboutBgWhite.svg')",
        'studentHeader': "url('/images/student/header.svg')",
        'logoBg': "url('/images/logoBg.svg')"
      },
      colors: {
        buttonBlue: '#0017EB',
        buttonGray: '#BDCBD3',
        headingBlue: '#0017EB',
        subGray: '#676767',
        calendarBg: '#9FCFFF'
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    variants: {
      width: ["responsive", "hover", "focus"],
      height: ["responsive", "hover", "focus"],
      visibility: ['hover', 'focus'],
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}
