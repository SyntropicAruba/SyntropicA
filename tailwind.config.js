/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: 'class',
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",    
  ],
  theme: {
    extend: {
      colors: {        
        primary: colors.green
      }
    },
  },
  plugins: [],
}
