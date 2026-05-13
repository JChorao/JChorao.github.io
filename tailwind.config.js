/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./lang/*.json",
    "./src/**/*.{js,ts,jsx,tsx}", // Caso adiciones mais scripts no futuro
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'charcoal': '#121212',
        'soft-beige': '#F5F5DC',
      },
      backdropBlur: { xs: '2px' }
    }
  },
  plugins: [],
}