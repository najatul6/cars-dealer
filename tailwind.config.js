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
        background: '#000000',
        baseColor: '#006BB3',
        'background2':'#2a323d'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: "cupcake",
  },
}
