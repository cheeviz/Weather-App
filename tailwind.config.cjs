/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      backgroundImage: {
        dia: "url(../assets/bg-dia.png)",
        noite: "url(../assets/bg-noite.jpg)",
      },
    },
  },
  plugins: [],
};
