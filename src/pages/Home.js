import React from "react";
import Splash from "../components/splashScreen";
import Logo from "../assets/logo.png";
import Image2 from "../assets/image2.png";
import HeroImage from "../assets/hero.jpg";
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
      <section className="bg-hero cover bg-cover min-h-heroHeader flex items-center">
        <div className=" mx-auto max-w-screen-xl w-full">
          <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-palette-blue drop-shadow-md drop-shadow-black z-0 font-black text-7xl uppercase">
              <span className="text-6xl font-medium">Bienvenidos al</span>{" "}
              <br /> CICLO ESCOLAR <br />
              2022 - 2023
            </h1>

            <a
              href="/#schools"
              className="rounded-full px-8 py-3 bg-palette-yellow/90 hover:bg-palette-yellow shadow-md active:shadow-none shadow-black/10 text-palette-white font-medium w-max  text-xl   "
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </section>
      <section className="min-h-screen  flex items-center" id="schools">
        <div className="flex gap-4 p-4 max-w-screen-xl flex-wrap mx-auto w-full ">
          <h3 className="text-center text-4xl font-bold w-full text-palette-green">
            Catagalo
          </h3>
          <div className="flex gap-4 items-center justify-between w-full">
            <a
              href=""
              className="flex flex-col w-2/6  shadow-md rounded-xl overflow-hidden shadow-black/30 relative bg-table bg-cover text-palette-white group"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className=" rounded-t-xl"
                />
                <span className="hidden group-hover:flex absolute top-0 bg-black/40 p-2 items-center justify-center text-center text-2xl w-full h-full">
                  Estos articulos son para niños de primarias.
                </span>
              </div>

              <h4 className="text-xl font-semibold px-2 py-3">Primaria</h4>
            </a>
            <a
              href=""
              className="flex flex-col w-2/6 shadow-md rounded-xl overflow-hidden shadow-black/30 relative bg-table bg-cover text-palette-white group"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className=" rounded-t-xl"
                />
                <span className="hidden group-hover:flex absolute top-0 bg-black/40 p-2 items-center justify-center text-center text-2xl w-full h-full">
                  Estos articulos son para niños de secundaria.
                </span>
              </div>

              <h4 className="text-xl font-semibold px-2 py-3">High School</h4>
            </a>
            <a
              href=""
              className="flex flex-col w-2/6 shadow-md rounded-xl  overflow-hidden shadow-black/40 relative bg-table bg-cover text-palette-white group"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/53874/pexels-photo-53874.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className=" rounded-t-xl"
                />
                <span className="hidden group-hover:flex absolute top-0 bg-black/40 p-2 items-center justify-center text-center text-2xl w-full h-full">
                  Productos especiales para nuestros compradores
                </span>
              </div>

              <h4 className="text-xl font-semibold px-2 py-3">
                Productos Especiales
              </h4>
            </a>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-palette-white flex items-center">
        <div className="max-w-screen-xl w-full mx-auto flex gap-2 items-center justify-center">
          <img src={Image2} alt="" />
          <div className="flex gap-3 flex-col">
            <span className="text-palette-yellow text-lg font-medium">
              Guía de navegación
            </span>
            <h2 className="text-6xl font-bold">Manual de Compra</h2>
            <p className="text-lg">
              Consulta el{" "}
              <span className="text-palette-green font-medium">
                manual en PDF
              </span>{" "}
              para guiarte en el proceso de compra.
            </p>
            <a
              href="#"
              className="rounded-full px-8 py-3 bg-palette-yellow/90 hover:bg-palette-yellow shadow-md active:shadow-none shadow-black/10 text-palette-white font-medium w-max text-xl"
            >
              Descargar PDF
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-300">
        <div className="flex items-center justify-between max-w-screen-lg w-full mx-auto p-2">
          <img src={Logo} alt="" className="w-40" />
          <span className="font-medium text-sm">© 2022, School Trep</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
