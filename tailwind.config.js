/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      screens: {
      xs: "480px",
    },
    colors: {
      customGray: '#F3F5F7', 
      Midnight_Blue: '#2D314F'
    },
  },
  },
  plugins: [],
}