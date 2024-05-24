/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      'bright-turquoise': {
        '50': '#eefffd',
        '100': '#c5fffa',
        '200': '#8bfff6',
        '300': '#49fff2',
        '400': '#34efe8',
        '500': '#00d0cb',
        '600': '#00a8a7',
        '700': '#008385',
        '800': '#066669',
        '900': '#0a5657',
        '950': '#003135',
      },
      'rose-of-sharon': {
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fde58a',
        '300': '#fbd24e',
        '400': '#fabe25',
        '500': '#f49d0c',
        '600': '#d87607',
        '700': '#bc560a',
        '800': '#923f0e',
        '900': '#78340f',
        '950': '#451a03',
      },
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
    },
    extend: {
      animation: {
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
      },
    },
  },
  plugins: [],
}