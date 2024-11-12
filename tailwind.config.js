/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html"],
  theme: {
    extend: {
      fontSize: {
        'custom-32': '32px',
        'custom-15':'15px',
        'custom-20':'20px',
        'custom-16':'16px',
      },
      colors: {
        'custom-gray': '#929292',
      },
    },
  },
  plugins: [],
}

