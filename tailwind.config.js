/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0d1b2a',
        'navy': '#1b263b',
        'blue-gray': '#415a77',
        'light-blue': '#778da9',
        'cream': '#e0e1dd'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
