/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'custom-maroon': '#38bdf8',
        'custom-maroon-dark': '#3b82f6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}