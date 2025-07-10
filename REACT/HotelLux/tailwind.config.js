/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bricolage:['"Bricolage Grotesque"' , "sans-serif" ],
        roboto:['"OutFit"' ,'sans-serif'],
      }
    },
  },
  plugins: [],
}

