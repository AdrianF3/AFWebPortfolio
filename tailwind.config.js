/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage : {
        'svgBG': "url('/src/images/cornered-stairs.svg')"
      }
    },
  },
  plugins: [],
}
