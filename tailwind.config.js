/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',            // Include the root app file
    './pages/**/*.vue',     // Include all pages
    './components/**/*.vue' // Include all components
  ],
  theme: {
    extend: {}, // Customize the theme here if needed
  },
  plugins: [], // Add Tailwind plugins here if needed
};
