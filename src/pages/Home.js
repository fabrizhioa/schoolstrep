import React from "react";
import Logo from "../assets/logo.png";
import Image2 from "../assets/image2.png";
import { Colegios } from "../fakedata";
import { Link } from "react-router-dom";
import StringToUrl from "../adapters/StringToUrl";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col antialiased overflow-hidden bg-palette-blue relative snap-y snap-proximity">
      <section className="bg-hero cover bg-cover min-h-screen flex items-center snap-end">
        <div className=" mx-auto max-w-screen-xl w-full">
          <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-palette-blue drop-shadow-[2px_2px_10px_rgba(255,255,255,0.25)] drop-shadow-black z-0 font-black text-7xl uppercase">
              <span className="text-6xl font-medium">Bienvenidos al</span>{" "}
              <br /> CICLO ESCOLAR <br />
              2022 - 2023
            </h1>

            <a
              href="/#"
              className="rounded-full px-8 py-3 bg-palette-yellow/90 hover:bg-palette-yellow shadow-md active:shadow-none shadow-black/10 text-palette-white font-medium w-max  text-xl "
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </section>
      <section className="min-h-screen  flex items-center snap-end">
        <div className="flex gap-4 p-4 max-w-screen-xl flex-wrap mx-auto w-full ">
          <h3 className="text-center text-4xl font-bold w-full text-palette-yellow">
            Colegios
          </h3>
          <div className="flex gap-4 items-center justify-between w-full">
            {Colegios.map((colegio, key) => (
              <Link
                to={"/shop?colegios=" + StringToUrl(colegio.nombre)}
                className="flex flex-col w-2/6  shadow-md rounded-xl overflow-hidden shadow-black/30 relative bg-table bg-cover text-palette-white min-h-[320px] h-[50vh]  group"
                key={key}
              >
                <div className="relative">
                  <img
                    src={colegio.img}
                    alt={colegio.nombre}
                    className=" rounded-t-xl aspect-square bg-white w-full p-2"
                  />
                </div>

                <h4 className="  px-2 py-3 flex items-center justify-center w-full h-full text-2xl font-['Rubik_Dirt']">
                  {colegio.nombre}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-palette-white flex items-center snap-end">
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
              href="/#"
              className="rounded-full px-8 py-3 bg-palette-yellow/90 hover:bg-palette-yellow shadow-md active:shadow-none shadow-black/10 text-palette-white font-medium w-max text-xl"
            >
              Descargar PDF
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-300 snap-end">
        <div className="flex items-center justify-between max-w-screen-lg w-full mx-auto p-2">
          <img src={Logo} alt="" className="w-40" />
          <span className="font-medium text-sm">© 2022, School Trep</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
