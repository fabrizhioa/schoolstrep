import React, { useState } from "react";
import Image2 from "../assets/image2.png";
import { Colegios } from "../fakedata";
import StringToUrl from "../adapters/StringToUrl";

//Componentes
import Splash from "../components/splashScreen";
import ModalForm from "../components/ModalForm";

const Home = () => {
  const [verModal, setVerModal] = useState(false);
  const [selectCollage, setSelectCollage] = useState("");
  const [filterColegios, setFilterColegios] = useState("");

  return (
    <>
      {verModal && (
        <ModalForm
          selectCollage={selectCollage}
          setSelectCollage={setSelectCollage}
          setVerModal={setVerModal}
        />
      )}
      <Splash />
      <div className="min-h-screen w-full flex flex-col antialiased overflow-hidden bg-palette-second relative snap-y snap-proximity">
        <section className="bg-heroMobile min-h-[50vh] md:bg-hero bg-cover md:min-h-[calc(100vh-80px)] px-4 pb-4 flex items-center snap-end">
          <div className=" mx-auto max-w-screen-xl w-full">
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="text-white drop-shadow-2xl z-0 font-black text-2xl md:text-7xl uppercase">
                <span>Bienvenidos al</span> <br /> CICLO ESCOLAR <br />
                2022 - 2023
              </h1>

              <a
                href="#colegios"
                className="rounded-full px-3 py-1 md:px-8 md:py-3 bg-palette-ext hover:bg-amber-500 shadow-md active:shadow-none shadow-black/10 text-palette-white font-medium w-max text-sm  md:text-xl "
              >
                Comprar ahora
              </a>
            </div>
          </div>
        </section>
        <section
          className="md:min-h-screen  flex items-center snap-end bg-gradient-to-tr from-slate-900  to-blue-900"
          id="colegios"
        >
          <div className="flex flex-col md:flex-row gap-4 p-4  max-w-screen-xl flex-wrap mx-auto w-full ">
            <div className="flex flex-col items-center justify-center mx-auto">
              <h3 className="text-center text-4xl font-bold w-full text-palette-ext mb-4 uppercase ">
                Seleccione el Colegio que desea comprar
              </h3>
              <input
                type="text"
                onChange={(e) => setFilterColegios(e.target.value)}
                value={filterColegios}
                placeholder="busca el colegio que desees"
                className="p-2 w-full rounded-md outline-none focus:border-palette-primary border-2 border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 md:flex md:flex-row flex-wrap md:gap-8 items-center w-full">
              {Colegios.map(
                (colegio, key) =>
                  (!filterColegios.length > 0 ||
                    colegio.nombre
                      .toLowerCase()
                      .includes(filterColegios.toLowerCase())) && (
                    <button
                      onClick={() => {
                        setSelectCollage(StringToUrl(colegio.nombre));
                        setVerModal(true);
                      }}
                      // className="shadow-md rounded-xl overflow-hidden shadow-black/30 relative bg-table bg-cover text-palette-white min-h-[320px] md:h-[50vh]  group items-center justify-center  hover:shadow-white/40"
                      className="max-w-[23%] w-auto inline-flex shadow-md rounded-xl bg-table relative shadow-black/20 bg-cover text-palette-white min-h-[320px] md:h-[50vh] group items-center justify-center hover:shadow-white/20 "
                      key={key}
                    >
                      <div className="relative w-max">
                        <img
                          src={colegio.img}
                          alt={colegio.nombre}
                          className=" rounded-t-xl aspect-square p-4 grayscale group-hover:grayscale-0 group-hover:drop-shadow-md group-hover:scale-105"
                        />
                        <h3 className="group-hover:text-white text-gray-800 text-center font-bold uppercase text-xl">
                          {colegio.nombre}
                        </h3>
                      </div>
                    </button>
                  )
              )}
            </div>
          </div>
        </section>
        <section className="md:min-h-screen bg-palette-white flex  items-center snap-end">
          <div className="max-w-screen-xl w-full mx-auto flex md:flex-row flex-col text-center md:text-left p-4 gap-2 items-center justify-center">
            <img src={Image2} alt="" />
            <div className="flex gap-3 flex-col">
              <span className="text-palette-ext text-lg font-medium">
                Guía de navegación
              </span>
              <h2 className="text-6xl font-bold">Manual de Compra</h2>
              <p className="text-lg">
                Consulta el{" "}
                <span className="text-palette-primary font-medium">
                  manual en PDF
                </span>{" "}
                para guiarte en el proceso de compra.
              </p>
              <a
                href="/#"
                className="rounded-full px-8 py-3 bg-palette-ext/90 hover:bg-palette-ext shadow-md active:shadow-none shadow-black/10 text-palette-white font-medium w-max text-xl mx-auto"
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
