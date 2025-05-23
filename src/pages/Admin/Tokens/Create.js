import React from "react";
import { MdClose } from "react-icons/md";
import StringToUrl from "../../../adapters/StringToUrl";
import { CheckBox, Input, InputSelect } from "../../../components/Admin/Inputs";
import { Colegios } from "../../../fakedata";

const Create = ({ closeAction }) => {
  return (
    <div className="bg-slate-50 p-4 min-w-[50%] rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-palette-primary">
          Agregar Token
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
          <InputSelect title="Escuela">
            {Colegios.map((colegio) => (
              <option value={StringToUrl(colegio.nombre)} key={colegio.id}>
                {colegio.nombre}
              </option>
            ))}
          </InputSelect>
          <Input
            title="Token"
            name="product_model"
            type="text"
            required={true}
          />

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
          <CheckBox title="Activar" name="activar" />
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
