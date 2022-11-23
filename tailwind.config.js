/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/hero.jpg')",
        table:
          "url('https://cdn.shopify.com/s/files/1/0566/3132/8937/t/3/assets/pf-becad9ad--Copia-de-Sin-titulo.png?v=1619757640')",
      },
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
