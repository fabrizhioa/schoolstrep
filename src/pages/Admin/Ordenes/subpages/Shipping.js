import React from "react";

const Shipping = () => {
  return (
    //Toda esta data es falsa y debe ser tomada de la data principal
    <div className="p-2 flex flex-col gap-2">
      <h4 className=" font-bold text-palette-primary">Dirección de entrega:</h4>
      <p className="p-2 border-2 rounded-md">
        Calle:<span> joe@doe.com</span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Colonia:<span></span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Numero:<span></span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Ciudad:<span></span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Estado:<span></span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Codigo Postal:<span></span>
      </p>
    </div>
  );
};

export default Shipping;
