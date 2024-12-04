/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Roboto":["roboto"],
        "Orbitron":["Orbitron"],
        "Montserrat":["Montserrat"]
      },
      screens:{
        MobileL:"425px",
        MobileM:"375px",
        MobileS:"320px"
      }
    },
  },
  plugins: [],
}