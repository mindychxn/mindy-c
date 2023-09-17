/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      DMSans: ['DMSans', 'sans-serif']
    },
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)'},
          '50%': { transform: 'translateY(10px)'},
          '100%': { transform: 'translateY(0px)'}
        },
        glow: {
          '100%': { textShadow: '0 0 20px #f8f6e536'}
        },
        slideDown: {
          '0%' : {transform: 'translateY(-20px)'},
          '100%' : {transform: 'translateY(0)'}
        },
        slideUp: {
          '0%' : {transform: 'translateY(0)'},
          '100%' : {transform: 'translateY(-20px)'}
        }
      },
      animation: {
        float1: 'float 3s ease-in-out infinite',
        float2: 'float 3s ease-in-out -1.5s infinite',
        glow: 'glow 1.5s ease-in-out infinite alternate'
      },
      colors: {
        cream: '#f8f6e5'
      },
      dropShadow: {
        glow: '1px 5px 10px #f8f6e5b3'
      }
    },
  },
  plugins: [],
}

