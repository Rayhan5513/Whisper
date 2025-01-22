/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./app.vue",
    "node_modules/primevue/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        bebas: "Bebas Neue",
        spicy: "Spicy Rice",
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};

