/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fb5438',
        'secondary': '#ffba50',
        'primary-light': '#fff0d8',
      },
    },
  },
  plugins: [],
}
