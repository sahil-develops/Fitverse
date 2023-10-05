/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Jost: ['Jost', 'sans-serif'],
        Outfit:['Outfit', 'sans-serif'],
        Inter:['Inter', 'sans-serif'],
      },
    },
  },

  plugins: [],
}