/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'scale(1)'},
          '50%': { transform: 'scale(1.05)'}
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

