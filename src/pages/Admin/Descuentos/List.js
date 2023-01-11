import React from "react";

const List = ({ actionOpenCreateModal }) => {
  //data falsa para pruebas porque no existe
  const falseArray = new Array(5).fill(1);

  return (
    <div className="flex flex-col gap-3 p-4 w-full h-full bg-slate-100">
      <div className="flex items-center justify-between">
        <h3 className="text-palette-primary font-bold text-xl p-2">
          Codigo de Descuento
        </h3>
        <div>
          <button
            className="p-2 px-4 rounded-md bg-palette-primary hover:bg-palette-ext drop-shadow-md text-white font-bold active:drop-shadow-none"
            onClick={actionOpenCreateModal}
          >
            Crear nuevo
          </button>
        </div>
      </div>

      <table className="rounded-md overflow-hidden shadow-sm">
        <thead>
          <tr className="border-b-2 bg-slate-200 p-1 rounded-md">
            <th className="p-1">ID</th>
            <th className="p-1">Codigo</th>
            <th className="p-1">Porcentaje</th>
            <th className="p-1">Fecha Inicio</th>
            <th className="p-1">Fecha Fin</th>
            <th className="p-1">Estado</th>
            <th className="p-1">Uso</th>
            <th className="p-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {falseArray.map((e, key) => (
            <tr
              key={key}
              className="border-b-2 last:border-0 text-center bg-slate-50"
            >
              <td className="p-1">{key}</td>
              <td className="p-1">SCHOOLTREP{key}</td>
              <td className="p-1">30</td>
              <td className="p-1">22/01/2022</td>
              <td className="p-1">23/01/2022</td>
              <td className="p-1">
                <span className="p-1 px-2  rounded-full bg-green-600 text-green-900 text-xs font-bold">
                  Activo
                </span>
              </td>
              <td className="p-1">{23 * key}</td>
              <td className="p-1 flex flex-col ">
                <button className="text-sm font-semibold text-palette-ext">
                  Modificar
                </button>
                <button className="text-sm font-semibold text-red-500">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
