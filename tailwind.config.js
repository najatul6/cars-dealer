/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'Dark-blue': '#006BB3',
        'light-blue': '#01D1FF',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: "cupcake",
  },
}
