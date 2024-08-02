/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#1F2029",
        black: "#131314",
        lighgGray: "#45464A",
        lightBlue: "#7396FE",
      },
    },
  },
  plugins: [],
};
