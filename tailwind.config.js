/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    screens: {
    'md': '828px'
    },
    translate: {

    },
    extend:{
      keyframes:{
        scaleRtoL : {
          '0%': { transform: 'scaleX(0)', 'transform-origin': '100%' },
          '100%': { transform: 'scaleX(1)', 'transform-origin': '100%' }
        },
        scaleLtoR : {
          '0%': { transform: 'scaleX(1)', 'transform-origin': '100%' },
          '100%': { transform: 'scaleX(0)', 'transform-origin': '100%' }
        }
      },
      animation: {
        'scale-r-to-l': 'scaleRtoL 300ms ease-in-out',
        'scale-l-to-r' : 'scaleLtoR 300ms ease-in-out forwards'
      }
    }
  },
  plugins: [],
}

