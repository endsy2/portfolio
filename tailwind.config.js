/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jaro: ['Jaro', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
        AntonSC: ['Anton SC', 'sans-serif']
      }
    },
    colors: {
      primary: {
        DEFAULT: "#578E7E",
        100: '#126e53'
      },
      subPrimary: {
        DEFAULT: "#FFFAEC",
      },
      thirdPrimary: {
        DEFAULT: "3D3D3D"
      },
      ...colors,
    }
  },
  plugins: [],
}