/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0d1117',
        'navy': '#161b22',
        'blue-gray': '#21262d',
        'light-blue': '#58a6ff',
        'cream': '#c9d1d9',
        'text-light': '#f0f6fc'
      },
      fontFamily: {
        'sans': ['Roboto', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
