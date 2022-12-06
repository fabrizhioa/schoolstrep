import React from "react";

import Image02 from "../../assets/about02.png";
import Image03 from "../../assets/about03.png";
import Image04 from "../../assets/about04.png";

const Services = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center  py-8 px-4">
      <h2 className="w-full block text-2xl font-bold text-center text-palette-green">
        ¿Qué servicios ofrecemos?
      </h2>
      <div className="grid md:grid-cols-3 items-center justify-center auto-rows-max w-full">
        <div>
          <img src={Image02} alt="icono" className="mx-auto w-32" />
          <h3 className="text-lg font-bold text-center text-palette-yellow">
            Paquetes Institucionales
          </h3>
          <p className="p-2 text-center font-lighter">
            Ofrecemos paquetes personalizados por escuela y grado escolar para
            brindarles una solución integral a los padres de familias Kidzone.
          </p>
        </div>

        <div>
          <img src={Image03} alt="icono" className="mx-auto w-32" />
          <h3 className="text-lg font-bold text-center text-palette-yellow">
            Envio a domicilio
          </h3>
          <p className="p-2 text-center font-lighter">
            School trep se encarga de ordenar, procesar y enviar todos los
            pedidos de forma rápida y segura.
          </p>
        </div>

        <div>
          <img src={Image04} alt="icono" className="mx-auto w-32" />
          <h3 className="text-lg font-bold text-center text-palette-yellow">
            Servicio de Calidad
          </h3>
          <p className="p-2 text-center font-lighter">
            Nuestra prioridad es que los padres de familia se sientan seguros y
            satisfechos con su compra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
