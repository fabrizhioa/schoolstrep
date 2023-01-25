import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { CheckBox, Input } from "../../../components/Admin/Inputs";

const Create = ({ closeAction }) => {
  const [typeDiscount, setType] = useState(undefined);
  return (
    <div className="bg-slate-50 p-4 min-w-[50%] rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-palette-primary">
          Agregar Descuento
        </h2>
        <button
          type="button"
          onClick={closeAction}
          className="text-2xl font-bold hover:text-palette-ext"
        >
          <MdClose />
        </button>
      </div>
      <form
        className="flex flex-col gap-2 "
        onSubmit={(e) => {
          e.preventDefault();
          console.table(e.target);
        }}
      >
        <div className="flex flex-col gap-3">
          <Input
            title="Codigo"
            name="discount_code"
            type="text"
            required={true}
          />
          <Input
            title="Descuento (Porcentaje)"
            name="discount_value"
            type="text"
            required={true}
          />
          <div className="flex items-center gap-3">
            <div
              className={`p-1 px-2 border-2 rounded-md cursor-pointer bg-white ${
                typeDiscount === 0 || typeDiscount === undefined
                  ? "border-palette-primary"
                  : "border-slate-300"
              }`}
              onClick={() => setType(0)}
            >
              <p>Porcentaje</p>
            </div>
            <div
              className={`p-1 px-2 border-2 rounded-md cursor-pointer bg-white ${
                typeDiscount === 1
                  ? "border-palette-primary"
                  : "border-slate-300"
              }`}
              onClick={() => setType(1)}
            >
              <p>Cantidad</p>
            </div>
            <div
              className={`p-1 px-2 border-2 rounded-md cursor-pointer bg-white ${
                typeDiscount === 2
                  ? "border-palette-primary"
                  : "border-slate-300"
              }`}
              onClick={() => setType(2)}
            >
              <p>Envio Gratis</p>
            </div>
          </div>

          {typeDiscount === 0 || typeDiscount === undefined ? (
            <Input
              name="discount"
              type="number"
              min={1}
              max={100}
              title="Porcentaje"
            />
          ) : typeDiscount === 1 ? (
            <Input step="0.01" name="discount" type="number" title="Cantidad" />
          ) : (
            <input hidden name="discount" value="freeShipping" />
          )}

          <Input
            title="Fecha Inicio"
            name="date_start"
            type="date"
            required={true}
          />
          <Input
            title="Fecha Fin"
            name="date_end"
            type="date"
            required={true}
          />
          <CheckBox title="Activar" name="discount_status" />
          <div className="text-center">
            <button className="text-lg font-bold p-2 px-4 rounded-md bg-palette-ext hover:text-white">
              Crear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
