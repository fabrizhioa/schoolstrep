import React from "react";
import Splash from "../components/splashScreen";
import Logo from "../assets/logo.png";
const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col antialiased overflow-hidden bg-palette-blue relative font-['Quicksand']">
      <Splash />
      <header className="p-4 bg-palette-white h-20 grid items-center">
        <div className=" flex justify-between items-center max-w-screen-xl mx-auto w-full">
          <img src={Logo} alt="" className="w-32" />
          <nav className="flex gap-2">
            <a href="#" className="hover:underline outline-none">
              Home
            </a>
            <a href="#" className="hover:underline outline-none">
              Nosotros
            </a>
          </nav>
          <div>Compras</div>
        </div>
      </header>
      <section className="bg-palette-green min-h-heroHeader flex items-center">
        <div className=" grid grid-cols-[auto_40%] mx-auto max-w-screen-xl w-full">
          <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-palette-white font-black text-7xl uppercase">
              <span className="text-6xl font-medium">Bievenidos al</span> <br />{" "}
              CICLO ESCOLAR <br />
              2022 - 2023
            </h1>

            <a
              href="#"
              className="rounded-lg px-8 py-2 bg-palette-yellow/90 hover:bg-palette-yellow shadow-md active:shadow-none shadow-black/10 text-palette-white font-medium w-max"
            >
              Comprar ahora
            </a>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0566/3132/8937/t/3/assets/nosotros-page-20-1642386713042.png?v=1642386714"
            alt="https://cdn.shopify.com/s/files/1/0566/3132/8937/t/3/assets/nosotros-page-20-1642386713042.png?v=1642386714"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
