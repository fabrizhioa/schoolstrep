/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/hero.jpg')",
        heroMobile:
          "url('https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        table:
          "url('https://cdn.shopify.com/s/files/1/0566/3132/8937/t/3/assets/pf-becad9ad--Copia-de-Sin-titulo.png?v=1619757640')",
      },
      colors: {
        palette: {
          ext: "#FEC037",
          primary: "#0ea5e9",
          second: "#051535",
          white: "#FFFFFF",
        },
      },
      keyframes: {
        moveOut: {
          "0%": {
            top: "0",
          },
          "100%": {
            top: "-150%",
          },
        },
      },
      animation: {
        moveOut: "moveOut 2s 1s ease forwards",
      },
      minHeight: {
        heroHeader: "calc(100vh - 5rem)",
      },
    },
  },
  plugins: [],
};
