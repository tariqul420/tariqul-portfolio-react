/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary1': "#2FA258",
        'primary2': "#38BD67",
        'white-deep': "#DFDFDF",
        'white-lite': "#F1F7FB",
        'dark-deep': "#172635",
        'dark-lite': "#17263599",
      },
      fontFamily: {
        "Montserrat": ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}