import React from "react";
import { Link } from "react-router-dom";
import Empty from "../../../components/Admin/Empty";

const List = () => {
  const empty = false;
  const falseData = [{ id: "32", nombre: "Paquete 1" }];
  return empty ? (
    <Empty
      text="No hay paquetes"
      image="/assets/package_empty.svg"
      link={{ text: "Agregar nuevo paquete", url: "crear" }}
    />
  ) : (
    <div className="flex flex-col gap-3 p-4 w-full h-full bg-slate-100">
      <h3 className="text-palette-primary font-bold text-xl p-2">Escuelas</h3>
      <div className="flex gap-3 justify-end flex-wrap items-center">
        <Link
          to={"crear"}
          className="bg-palette-primary hover:bg-palette-ext font-bold text-white shadow active:shadow-none p-2 px-4 rounded-md"
        >
          Agregar nuevo
        </Link>
      </div>
      <table className="rounded-md overflow-hidden shadow-sm">
        <thead>
          <tr className="border-b-2 bg-slate-200 p-1 rounded-md">
            <th className="p-1">Paquete</th>
            <th className="p-1">Id</th>

            <th className="p-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {falseData.map((element, key) => (
            <tr
              key={key}
              className="border-b-2 last:border-0 text-center bg-slate-50 place-items-center "
            >
              <td className="p-1">
                {element.nombre.length > 60
                  ? element.nombre.substring(0, 59) + "..."
                  : element.nombre}
              </td>
              <td className="p-1">{element.id}</td>
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
  );
};

export default List;
