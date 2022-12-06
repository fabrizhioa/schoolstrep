import React from "react";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4">
      <span className="text-xl font-bold text-palette-yellow">
        PARENTS LOVE US
      </span>
      <h2 className="text-3xl font-bold text-palette-green">
        Lo que dicen los padres de Familia
      </h2>
      <div className="grid md:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col md:flex-row gap-4 p-3 items-center bg-slate-100 rounded-md ">
          <img
            src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-5dfff4be--Togepi-09.png?v=1584000215"
            alt="PAOLA RINCÓN"
            className="w-20 h-20 inline-block"
          />
          <div className="flex flex-col gap-2">
            <p>"Wow el servicio! Son lo máximo!!! Gracias infinitas"</p>
            <span className="text-xs">PAOLA RINCÓN</span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-4 p-3 items-center bg-slate-100 rounded-md ">
          <img
            src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-9f96de1b--Togepi-10.png?v=1584000432"
            alt="MÓNICA SETIEN"
            className="w-20 h-20 inline-block"
          />
          <div className="flex flex-col gap-2">
            <p>
              "Fue un placer trabajar con el equipo de Schooltrep. Siempre están
              disponibles para resolver cualquier duda. Muy atentos a los
              servicios que brindan. Se lo recomendaría a cualquiera!"
            </p>
            <span className="text-xs">MÓNICA SETIEN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
