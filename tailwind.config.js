/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-black": "#000000",
        "color-white": "#ffffff",
        "color-gray": "#d6d6d6",
      },
      fontFamily: {
        "Montserrat": ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}