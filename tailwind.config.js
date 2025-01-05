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
        'white-deep': "#F2F6FA",
        'white-lite': "#E9F2FF",
        // 'dark-deep': "#172635",
        // 'dark-lite': "#17263599",
        'dark-deep': "#09101a",
        'dark-lite': "#121b27",
      },
      fontFamily: {
        "Montserrat": ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}