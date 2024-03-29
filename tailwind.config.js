/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: '#00FFE1',
        secondary: '#898989',
        tertiary: '#28365f',
        deep: '#2b55cc',
        darktxt: '#848db3',
        darkBlue: '#151a33',
        skills: '#F2F2F2',
        projects: "#161616",
        darknight: "#252A2F"
      },
      fontFamily: {
        dodoo: ['Sacramento']
      }
    },
  },
  plugins: [],
}