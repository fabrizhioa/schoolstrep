import React from "react";
import Image from "../assets/about.png";
import Image02 from "../assets/about02.png";
import Image03 from "../assets/about03.png";
import Image04 from "../assets/about04.png";
const About = () => {
  return (
    <div className="pt-20 min-h-screen w-full  bg-white">
      <div className="grid auto-rows-max p-2  w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 items-center justify-center ">
          <div>
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
                tu hijo pueda desempeñar correctamente sus actividades
                escolares.
              </span>
            </p>
          </div>
          <img src={Image} alt="" className="mx-auto" />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
          <h2 className="w-full block text-2xl font-bold text-center text-palette-green">
            ¿Qué servicios ofrecemos?
          </h2>
          <div className="grid grid-cols-3 items-center justify-center auto-rows-max">
            <div>
              <img src={Image02} alt="icono" className="mx-auto w-32" />
              <h3 className="text-lg font-bold text-center text-palette-yellow">
                Paquetes Institucionales
              </h3>
              <p className="p-2 text-center font-lighter">
                Ofrecemos paquetes personalizados por escuela y grado escolar
                para brindarles una solución integral a los padres de familias
                Kidzone.
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
                Nuestra prioridad es que los padres de familia se sientan
                seguros y satisfechos con su compra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
