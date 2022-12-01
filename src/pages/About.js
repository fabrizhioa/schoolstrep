import React from "react";

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
          <img
            src="https://cdn.shopify.com/s/files/1/0566/3132/8937/t/3/assets/18-1641961544491.png?v=1641961548"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
          <h2 className="w-full block text-2xl font-bold text-center text-palette-green">
            ¿Qué servicios ofrecemos?
          </h2>
          <div className="grid grid-cols-3 items-center justify-center auto-rows-max">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-ed1713fa--JSN-Kidzone-Home-3.svg?v=1616554997"
                alt="icono"
                className="mx-auto w-30"
              />
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
              <img
                src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-1713fa6f--JSN-Kidzone-Home-4.svg?v=1616555008"
                alt="icono"
                className="mx-auto w-30"
              />
              <h3 className="text-lg font-bold text-center text-palette-yellow">
                Envio a domicilio
              </h3>
              <p className="p-2 text-center font-lighter">
                School trep se encarga de ordenar, procesar y enviar todos los
                pedidos de forma rápida y segura.
              </p>
            </div>

            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-13fa6fff--JSN-Kidzone-Home-5.svg?v=1616555021"
                alt="icono"
                className="mx-auto w-30"
              />
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
