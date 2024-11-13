 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: ["./pages/*.html", "./js/*.js", "./index.html"],
  theme: {
    fontFamily: {
      'sans': ['Comfortaa', 'sans-serif'],
    },
    extend: {
      colors: {
        'LimeGreen': "#4EB528"
      }
    },
  },
  plugins: [],
}

