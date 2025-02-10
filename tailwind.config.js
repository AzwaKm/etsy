/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        poppins: "'Archivo Narrow, serif",
        roboto: "'Oswald', serif"  
      },
      colors: {
        primary: "#F1641E",
        darkgreen: "#0F743B",
        lightgreen: "#A0E193"
      }
    },
  },
  variants: {
      extend: {
        display: ['group-hover'],
        visibility: ['group-hover']
      }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}