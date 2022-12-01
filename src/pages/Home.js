import React, { useState } from "react";
import Image2 from "../assets/image2.png";
import { Colegios } from "../fakedata";
import { Link } from "react-router-dom";
import StringToUrl from "../adapters/StringToUrl";
import Modal from "../components/Modal";
import Splash from "../components/splashScreen";

const Home = () => {
  const [verModal, setVerModal] = useState(false);
  return (
    <>
      {verModal && (
        <Modal closeAction={() => setVerModal(false)}>
          <form action="/shop" className="flex flex-col gap-1 p-2">
            <h2 className="font-bold text-xl text-center">
              Ingresar a la tienda
            </h2>
            <div>
              <span className="w-full py-1 block font-medium">Token</span>
              <input
                type="text"
                className="border-[1px] rounded-md outline-none p-1 w-full focus:border-palette-yellow hover:border-palette-blue"
                name="tkn"
              />
            </div>

            <div>
              <span className="w-full py-1 block font-medium">
                Selecciona el colegio
              </span>
              <select
                name="colegios"
                id=""
                className="p-1 border-[1px] rounded-md w-full focus:border-palette-yellow hover:border-palette-blue cursor-pointer"
              >
                {Colegios.map((colegio, key) => (
                  <option value={StringToUrl(colegio.nombre)}>
                    {colegio.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="w-full py-1 block font-medium ">
                Selecciona el grado/año
              </span>
              <select
                name="grado"
                className="p-1 w-full  border-[1px] rounded-md focus:border-palette-yellow hover:border-palette-blue  cursor-pointer"
              >
                <option value="1ro">1 º</option>
                <option value="2ro">2 º</option>
                <option value="3ro">3 º</option>
                <option value="4to">4 º</option>
                <option value="5to">5 º</option>
                <option value="6to">6 º</option>
                <option value="7mo">7 º</option>
                <option value="8vo">8 º</option>
                <option value="9no">9 º</option>
                <option value="10mo">10 º</option>
                <option value="11vo">11 º</option>
              </select>
            </div>
            <div>
              <button className="w-full bg-palette-green text-white px-4 py-2 rounded-md mt-3 ">
                Ir a la tienda
              </button>
            </div>
          </form>
        </Modal>
      )}
      <Splash />
      <div className="min-h-screen w-full flex flex-col antialiased overflow-hidden bg-palette-blue relative snap-y snap-proximity">
        <section className="bg-heroMobile min-h-[50vh] md:bg-hero bg-cover md:min-h-screen pt-24 px-4 pb-4 flex items-center snap-end">
          <div className=" mx-auto max-w-screen-xl w-full">
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="text-white drop-shadow-lg   z-0 font-black text-2xl md:text-7xl uppercase">
                <span>Bienvenidos al</span> <br /> CICLO ESCOLAR <br />
                2022 - 2023
              </h1>

              <button
                type="button"
                onClick={() => setVerModal(true)}
                className="rounded-full px-3 py-1 md:px-8 md:py-3 bg-palette-yellow hover:bg-amber-500 shadow-md active:shadow-none shadow-black/10 text-palette-white font-medium w-max text-sm  md:text-xl "
              >
                Comprar ahora
              </button>
            </div>
          </div>
        </section>
        <section className="md:min-h-screen  flex items-center snap-end">
          <div className="flex flex-col md:flex-row gap-4 p-4  max-w-screen-xl flex-wrap mx-auto w-full ">
            <h3 className="text-center text-4xl font-bold w-full text-palette-yellow mb-8 uppercase ">
              Colegios
            </h3>
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:gap-8 items-center justify-between w-full">
              {Colegios.map((colegio, key) => (
                <Link
                  to={"/shop?colegios=" + StringToUrl(colegio.nombre)}
                  className="flex flex-col w-full md:w-2/6  shadow-md rounded-xl overflow-hidden shadow-black/30 relative bg-table bg-cover text-palette-white min-h-[320px] md:h-[50vh]  group items-center justify-center  hover:shadow-white/40"
                  key={key}
                >
                  <div className="relative">
                    <img
                      src={colegio.img}
                      alt={colegio.nombre}
                      className=" rounded-t-xl aspect-square w-full p-2 grayscale group-hover:grayscale-0 group-hover:drop-shadow-md"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="md:min-h-screen bg-palette-white flex  items-center snap-end">
          <div className="max-w-screen-xl w-full mx-auto flex md:flex-row flex-col text-center md:text-left p-4 gap-2 items-center justify-center">
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
                className="rounded-full px-8 py-3 bg-palette-yellow/90 hover:bg-palette-yellow shadow-md active:shadow-none shadow-black/10 text-palette-white font-medium w-max text-xl mx-auto"
              >
                Descargar PDF
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
