/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#3b0764',
          purple: '#581c87',
          magenta: '#6b21a8',
          deep: '#13031f',
          accent: '#7e22ce',
        }
      }
    },
  },
  plugins: [],
}
