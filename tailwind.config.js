/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',        // For the public HTML file
    './src/**/*.{vue,js,ts,jsx,tsx}', // For all Vue, JS, and TS files inside src
  ],
  theme: {
    extend: {
      // You can add custom colors, spacing, fonts, etc., here
    },
  },
  plugins: [],
}
