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
          '0%, 100%': { transform: 'scale(1.02)'},
          '50%': { transform: 'scale(1.05)'}
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      },
      colors: {
        cream: '#fffcf1dc'
      },
      dropShadow: {
        glow: '1px 5px 10px rgba(255,252,241,0.5)'
      }
    },
  },
  plugins: [],
}

