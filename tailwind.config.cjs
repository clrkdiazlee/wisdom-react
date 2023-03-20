/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonBlue: '#0017EB',
        buttonGray: '#BDCBD3'
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
