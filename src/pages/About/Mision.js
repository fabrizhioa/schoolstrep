import React from "react";
import Image from "../../assets/about.png";
const Mision = () => {
  return (
    <div className="grid md:grid-cols-2 items-center justify-center text-center md:text-left  py-8 px-4">
      <div className="order-2 md:order-1">
        <span className="uppercase font-bold text-lg text-palette-yellow">
          MISIÓN Y FILOSOFÍA
        </span>
        <h3 className="text-3xl font-bold text-palette-green">
          Nuestra promesa
        </h3>
        <p className="text-lg font-medium">
          Schooltrep se compromete a proporcionar un servicio excepcional de{" "}
          <span className="text-palette-blue font-bold">
            venta de útiles escolares a través de nuestra página web.
          </span>
          <br />
          <br />
          Entregaremos en tiempo y forma los productos para que el{" "}
          <span className="text-palette-blue font-bold">
            tu hijo pueda desempeñar correctamente sus actividades escolares.
          </span>
        </p>
      </div>
      <img src={Image} alt="" className="mx-auto order-1 md:order-2" />
    </div>
  );
};

export default Mision;
