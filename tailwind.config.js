/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#705AAA",
        "gray-light": "#CBC8D4",
        "active-bg-2": "#D8FCF7",
        "active-bg-1": "#01F0D0",
        green: "#0BD984",
        "dark-blue": "#072635",
        "blue-1": "#0C3D5D",
        "blue-2": "#084C77",
        "blue-3": "#055A92",
        "blue-4": "#006AAC",
        "blue-5": "#007BC7",
        gray: "#707070",
        "gray-bg": "#F6F6F6",
        "gray-border": "#EDEDED",
        "gray-text": "#878787",
        orange: "#FF6200",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
