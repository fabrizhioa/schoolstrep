import React from "react";

import Image02 from "../../assets/about02.svg";
import Image03 from "../../assets/about03.svg";
import Image04 from "../../assets/about04.svg";

const Services = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-slate-50">
      <div className="flex flex-col gap-4 items-center justify-center  py-8 px-4 max-w-screen-xl mx-auto">
        <h2 className="w-full block text-2xl font-bold text-center text-palette-primary">
          ¿Qué servicios ofrecemos?
        </h2>
        <div className="grid md:grid-cols-3 items-center justify-center auto-rows-max w-full">
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <img
              src={Image02}
              alt="icono"
              className="mx-auto w-32 aspect-square"
            />
            <h3 className="text-lg font-bold text-center text-palette-ext">
              Paquetes Institucionales
            </h3>
            <p className="p-2 text-center font-lighter">
              Ofrecemos paquetes personalizados por escuela y grado escolar para
              brindarles una solución integral a los padres de familias Kidzone.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <img
              src={Image03}
              alt="icono"
              className="mx-auto w-32 aspect-square"
            />
            <h3 className="text-lg font-bold text-center text-palette-ext">
              Envio a domicilio
            </h3>
            <p className="p-2 text-center font-lighter">
              School trep se encarga de ordenar, procesar y enviar todos los
              pedidos de forma rápida y segura.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <img
              src={Image04}
              alt="icono"
              className="mx-auto w-32 aspect-square"
            />
            <h3 className="text-lg font-bold text-center text-palette-ext">
              Servicio de Calidad
            </h3>
            <p className="p-2 text-center font-lighter">
              Nuestra prioridad es que los padres de familia se sientan seguros
              y satisfechos con su compra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
