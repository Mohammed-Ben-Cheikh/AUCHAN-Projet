/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html", "./js/*.js"],
  theme: {
    fontFamily: {
      'sans': ['Comfortaa', 'sans-serif'],
    },
    extend: {
      colors: {
        'LimeGreen': "#4EB528",
        'CoralRed': "#FC4544"
      }
    },
  },
  plugins: [],
}