/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        glo: "#72AE49",
        airtel: "#FF0000",
        mtn: "#fbca07",
        etisalat: "#346B22",
      },
    },
  },
  plugins: [],
};
