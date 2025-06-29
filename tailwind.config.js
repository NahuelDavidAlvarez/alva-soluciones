/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // permite modo claro/oscuro manual
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // azul oscuro (como base)
        accent: '#8193d4' // celeste más oscuro
        /*  accent: '#38bdf8' // celeste claro */
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
