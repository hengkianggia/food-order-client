/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Cardo: ["Cardo", "serif"],
        Montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
};
