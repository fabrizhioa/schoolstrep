import React from "react";
import Image from "../../assets/about.svg";
const Mision = () => {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-[60vh] bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="grid md:grid-cols-2 items-center justify-center text-center md:text-left  py-8 px-4 max-w-screen-xl mx-auto gap-4 overflow-hidden">
        <div className="order-2 md:order-1">
          <span className="uppercase font-bold text-lg text-palette-ext">
            MISIÓN Y FILOSOFÍA
          </span>
          <h3 className="text-3xl font-bold text-palette-primary">
            Nuestra promesa
          </h3>
          <p className="text-lg font-medium">
            Schooltrep se compromete a proporcionar un servicio excepcional de{" "}
            <span className="text-palette-second font-bold">
              venta de útiles escolares a través de nuestra página web.
            </span>
            <br />
            <br />
            Entregaremos en tiempo y forma los productos para que el{" "}
            <span className="text-palette-second font-bold">
              tu hijo pueda desempeñar correctamente sus actividades escolares.
            </span>
          </p>
        </div>
        <img
          src={Image}
          alt=""
          className="mx-auto w-4/5 order-1 md:order-2"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default Mision;
