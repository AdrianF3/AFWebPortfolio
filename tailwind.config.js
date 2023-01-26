/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'svgBG': "url('/src/images/cornered-stairs.svg')"
      }
    },
  },
  plugins: [],
}
