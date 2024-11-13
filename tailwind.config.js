/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html", "./js/*.js"],
  theme: {
    extend: {
      fontSize: {
        'sans': ['Comfortaa', 'sans-serif'],
        'custom-32': '32px',
        'custom-15':'15px',
        'custom-20':'20px',
        'custom-16':'16px'
      },
      colors: {
        'custom-gray': '#929292',
        'LimeGreen': "#4EB528",
        'CoralRed': "#FC4544"
      },
    },
  },
  plugins: [],
}