/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroPattern': "url('/images/heroPattern.svg')",
      },
      colors: {
        buttonBlue: '#0017EB',
        buttonGray: '#BDCBD3',
        headingBlue: '#0017EB',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      poppinsLight: ['Poppins', 'sans-serif']
    },
    variants: {
      width: ["responsive", "hover", "focus"],
      height: ["responsive", "hover", "focus"],
      visibility: ['hover', 'focus'],
    },

  },
  plugins: [],
}
