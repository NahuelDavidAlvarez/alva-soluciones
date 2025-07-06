/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // permite modo claro/oscuro manual
  theme: {
    extend: {
      colors: {
        'primary': '#150E03',
        'primary-focus': '#705843',
        'secondary': '#70663A',
        'accent': '#C49F7A',
        'neutral': '#91806B',
        'base-100': '#F1EAD8',
        'base-200': '#CFC6B1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
