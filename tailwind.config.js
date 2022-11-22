/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        palette: {
          yellow: "#FEC037",
          green: "#0B846D",
          blue: "#051535",
          white: "#FFFFFF",
        },
      },
      keyframes: {
        moveOut: {
          "0%": {
            top: "0",
          },
          "100%": {
            top: "-100%",
          },
        },
      },
      animation: {
        moveOut: "moveOut 2s 3.1s ease forwards",
      },
      minHeight: {
        heroHeader: "calc(100vh - 5rem)",
      },
    },
  },
  plugins: [],
};
