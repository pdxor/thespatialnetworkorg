/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F6B55',
          dark: '#1F4A3A',
          light: '#4A8C74',
        },
        secondary: {
          DEFAULT: '#A67C52',
          dark: '#8E6A45',
          light: '#C09A74',
        },
        accent: {
          DEFAULT: '#7BB5D4',
          dark: '#5A9BC0',
          light: '#9CCBE2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};