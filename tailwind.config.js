/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist//*.{html,js}", "{html,js}", "./*.{html,js}"],
  theme: {
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
      },
  },
  plugins: [],
}

