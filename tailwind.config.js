/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html"],
  theme: {
    extend: {
      fontSize: {
        'custom-32': '32px',
        'custom-15':'15px',
      },
      colors: {
        'custom-gray': '#929292',
      },
    },
  },
  plugins: [],
}

