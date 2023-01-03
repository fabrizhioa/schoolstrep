import React from "react";

const Community = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-slate-50 to-blue-50 md:min-h-heroHeader justify-center items-center">
      <div className="grid md:grid-cols-2 auto-rows-max   gap-4 p-4 items-center justify-center  w-full max-w-screen-xl text-center md:text-left mx-auto overflow-hidden">
        <div className="flex flex-col gap-2 order-2 md:order-1">
          <span className="text-xl font-bold text-palette-ext">
            Comunidad Schooltrep
          </span>
          <h2 className="text-3xl font-bold text-palette-primary">
            ¡Asóciate hoy mismo!
          </h2>
          <p>
            ¡En Schooltrep nos encantaría saber de ustedes. Da click a
            continuación para ponerse en contacto con nosotros. ¡Conviértete en
            una escuela asociada a School Trep!
          </p>
          <a
            href="tel:+525639421851"
            className="px-8 py-3 bg-palette-ext cursor-pointer text-white text-bold inline-block rounded-full w-max mx-auto md:mx-0"
          >
            Telefono
          </a>
        </div>
        <div className="order-1 md:order-1 overflow-hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-403473eb--JSN-Pixel-2-About-12.png?v=1616557422"
            alt="comunidad"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
