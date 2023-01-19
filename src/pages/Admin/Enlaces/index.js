import React, { useState } from "react";
import StringToUrl from "../../../adapters/StringToUrl";
import {
  Input,
  InputImage,
  InputSelect,
} from "../../../components/Admin/Inputs";
import Modal from "../../../components/Modal";
import { Colegios } from "../../../fakedata";
const Enlaces = () => {
  const [viewModal, setViewModal] = useState(false);
  const falseData = [
    {
      id: 32,
      nombre: "PDF TEST",
      url: "https://pdf.com",
    },
  ];
  return (
    <>
      {viewModal && (
        <Modal closeAction={() => setViewModal(false)}>
          <form className="grid grid-cols-2 gap-3 p-2 bg-white">
            <div>
              <Input title="Nombre" name="name" />
              <InputSelect title="colegio" name="colegio">
                {Colegios.map((e, key) => (
                  <option key={key} value={StringToUrl(e.nombre)}>
                    {e.nombre}
                  </option>
                ))}
              </InputSelect>
            </div>

            <InputImage title="PDF" />
            <div className="col-span-full text-center p-2">
              <button className="text-lg font-bold p-2 px-4 rounded-md bg-palette-ext hover:text-white">
                Crear
              </button>
            </div>
          </form>
        </Modal>
      )}
      <div className="flex flex-col gap-3 p-4 w-full h-full bg-slate-100">
        <div className="flex justify-between items-center gap-3">
          <h3 className="text-palette-primary font-bold text-xl p-2">
            Enlaces
          </h3>
          <button
            type="button"
            className="bg-palette-primary hover:bg-palette-ext font-bold text-white shadow active:shadow-none p-2 px-4 rounded-md"
            onClick={() => setViewModal(true)}
          >
            Agregar nuevo
          </button>
        </div>
        <table className="rounded-md overflow-hidden shadow-sm">
          <thead>
            <tr className="border-b-2 bg-slate-200 p-1 rounded-md">
              <th className="p-1">Id</th>
              <th className="p-1">Nombre</th>
              <th className="p-1">Url</th>
              <th className="p-1">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {falseData.map((element, key) => (
              <tr
                key={key}
                className="border-b-2 last:border-0 text-center bg-slate-50 place-items-center "
              >
                <td className="p-1">{element.id}</td>
                <td className="p-1 font-medium">{element.nombre}</td>
                <td className="p-1">{element.url}</td>
                <td className="p-1">
                  <div className="flex flex-col items-center">
                    <button className="text-sm font-semibold text-palette-ext">
                      Modificar
                    </button>
                    <button className="text-sm font-semibold text-red-500">
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Enlaces;
