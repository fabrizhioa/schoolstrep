import React from "react";

import Cervantes from "../assets/collages/cervantes.png";
import Ciencias from "../assets/collages/ciencias.png";
import MonteVerde from "../assets/collages/monteverde.png";
import Valle from "../assets/collages/valle.png";

import Logo from "../assets/logo.png";

const Splash = () => {
  return (
    <div className="opacity-1 bg-palette-white flex flex-col items-center justify-center w-full min-h-screen animate-moveOut fixed top-0 z-20">
      <div className=" w-max">
        <img src={Logo} alt="logotipo" className="w-80 mx-auto my-4" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-center">
          <div className=" flex flex-col gap-1 items-center justify-center">
            <img
              src={Cervantes}
              alt="colegio cervantes"
              className="w-16 lg:w-32 aspect-square bg-palette-white p-2 rounded-md"
            />
            <h3 className="font-bold text-sm">Colegio Cervantes</h3>
          </div>
          <div className=" flex flex-col gap-1 items-center justify-center">
            {" "}
            <img
              src={Ciencias}
              alt="colegio de Ciencias"
              className="w-16 lg:w-32  aspect-square bg-palette-white p-2 rounded-md"
            />
            <h3 className="font-bold text-sm">Colegio de ciencias</h3>
          </div>
          <div className=" flex flex-col gap-1 items-center justify-center">
            <img
              src={MonteVerde}
              alt="colegio monteverde"
              className="w-16 lg:w-32  aspect-square bg-palette-white p-2 rounded-md"
            />
            <h3 className="font-bold text-sm">Colegio Monte Verde</h3>
          </div>
          <div className=" flex flex-col gap-1 items-center justify-center">
            <img
              src={Valle}
              alt="colegio del valle"
              className="w-16 lg:w-32  aspect-square bg-palette-white p-2 rounded-md"
            />
            <h3 className="font-bold text-sm">Colegio del Valle</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
