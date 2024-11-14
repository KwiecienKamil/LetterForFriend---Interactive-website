/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradient1: "#948E99",
        gradient2: "#2E1437",
      },
      backgroundImage: {
        table: "url(/img/bg.png)",
      },
      fontFamily: {
        gummy: "Sour Gummy",
      },
    },
  },
  plugins: [],
};
