/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter", "serif"],
      Poppins: ["Poppins", "serif"],
    },
  },
  plugins: [],
};
