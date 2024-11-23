/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // include all JSX and TSX files
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1050px', 
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}