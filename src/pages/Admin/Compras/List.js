import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Empty from "../../../components/Admin/Empty";

const List = () => {
  const empty = false;
  const falseArray = new Array(5).fill(0);
  const [search, setSearch] = useState("");
  // const [countView, setCountView] = useState(5);
  return empty ? (
    <Empty
      image="/assets/buy_empty.svg"
      text="No hay compras realizadas"
      link={{ text: "Agregar nueva compra", url: "crear" }}
    />
  ) : (
    <div className="flex flex-col gap-3 p-4 w-full h-full bg-slate-100">
      <h3 className="text-palette-primary font-bold text-xl p-2">Compras</h3>
      <div className="flex gap-3 justify-end flex-wrap items-center">
        <div className="flex flex-wrap gap-3 items-center">
          <span>Buscar:</span>
          <input
            type="search"
            className="p-1 rounded-md shadow-sm"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>

        <Link
          to={"crear"}
          className="bg-palette-primary hover:bg-palette-ext font-bold text-white shadow active:shadow-none p-1 px-4 rounded-md"
        >
          Agregar nuevo
        </Link>

        {/* <div className="flex flex-wrap gap-3  items-center">
          <span>Mostrar:</span>
          <select
            name=""
            id=""
            className="p-1 rounded-md shadow-sm"
            value={countView}
            onChange={(e) => setCountView(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div> */}
      </div>
      <table className="rounded-md overflow-hidden shadow-sm">
        <thead>
          <tr className="border-b-2 bg-slate-200 p-1 rounded-md">
            <th className="p-1">ID</th>
            <th className="p-1">Factura</th>
            <th className="p-1">Fecha</th>
            <th className="p-1">Costo</th>
            <th className="p-1">Cantidad de Elementos</th>
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
              <td className="p-1">Factura#{key}</td>
              <td className="p-1">22/01/2022</td>
              <td className="p-1">$300</td>
              <td className="p-1">25</td>

              <td className="p-1 flex flex-col ">
                <Link
                  to={"ver/" + key /* Aca debe ir el id */}
                  className="text-sm font-semibold text-palette-primary"
                >
                  Ver
                </Link>
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
