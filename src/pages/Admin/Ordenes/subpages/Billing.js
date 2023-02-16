import React from "react";
import { InputFile } from "../../../../components/Admin/Inputs";

const Billing = () => {
  return (
    <div className="p-2 flex flex-col gap-2">
      <h4 className=" font-bold text-palette-primary">Facturación:</h4>
      <p className="p-2 border-2 rounded-md">
        Nombre:<span> joe doe</span>
      </p>
      <p className="p-2 border-2 rounded-md">
        RFC:<span> joe@doe.com</span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Uso de CFDI:<span> joe@doe.com</span>
      </p>
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
        Pais:<span></span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Codigo Postal:<span></span>
      </p>

      <form className="border-t-4 border-t-palette-primary p-2 flex flex-col gap-3 ">
        <div className="grid grid-cols-2 gap-3 mx-auto w-2/3">
          <InputFile title="PDF" name="PDF" required={true} />
          <InputFile title="XML" name="XML" required={true} />
        </div>

        <div className="text-center w-2/3 mx-auto p-2">
          <button className="text-lg font-bold p-2 px-4 rounded-md bg-palette-ext hover:text-white">
            Guardar y enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Billing;
