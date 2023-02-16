import React from "react";
import { FaCcVisa } from "react-icons/fa";

const Paying = ({ element }) => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h4 className="text-lg font-semibold">Información de pagos</h4>

      <div className="flex items-center gap-2">
        <FaCcVisa className="text-4xl text-palette-primary" />
        <p className="font-semibold">Ending with 4242</p>
        <span className="text-sm">Expires 02/24</span>
      </div>
      <div className="rounded-md text-palette-second">
        <div className="flex justify-between py-2 items-center font-medium border-b-2 border-palette-second">
          <p>Subtotal </p>
          <p>${element.total * 0.84}</p>
        </div>
        <div className="flex justify-between py-2 items-center font-medium border-b-2 border-palette-second">
          <p>Inpuestos </p>
          <p>${element.total * 0.16}</p>
        </div>
        <div className="flex justify-between py-2 items-center font-medium border-b-4 border-palette-primary">
          <p>Envio </p>
          <p>${14}</p>
        </div>
        <div className="font-semibold text-palette-blue text-lg flex justify-between py-2">
          <p>Total</p> <p>${element.total + 14}</p>{" "}
        </div>
      </div>

      <form className="border-t-4 flex flex-col gap-2 py-4">
        <span className="font-medium">Estado del pago</span>
        <select
          name="changeState"
          id=""
          className="p-2 border-2 rounded-lg focus:border-palette-primary outline-none cursor-pointer"
        >
          <option value="Pagado">Pagado</option>
          <option value="NoPagado">No Pagado</option>
          <option value="Proceso">En proceso</option>
          <option value="Denegado">Denegado</option>
        </select>
      </form>
    </div>
  );
};

export default Paying;
