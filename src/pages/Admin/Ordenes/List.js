import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [countView, setCountView] = useState(5);
  const [search, setSearch] = useState("");
  //data falsa para pruebas porque no existe
  const [falseArray, setFalseArray] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    // ACA SE CAMBIA POR LA DATA RECIBIDA
    let fa = new Array(20);
    for (let i = 0; i < fa.length; i++) {
      fa[i] = i;
    }

    let arrayPage = [];
    let maxPage = fa.length / countView;
    for (let i = 0; i < maxPage; i++) {
      arrayPage[i] = fa.filter(
        (e, key) => key >= countView * i && key < countView * (i + 1)
      );
    }
    setFalseArray(arrayPage);
    setPage(1);
    // if (search.length > 0) {
    //   //funcion de busqueda
    //   //let newArray = array.filter((element) =>  element.id.includes(search))
    //   //setArray(newArray)
    // }
  }, [countView, search]);

  return (
    <div className="flex flex-col gap-3 p-4 w-full h-full bg-slate-100">
      <h3 className="text-palette-primary font-bold text-xl p-2">Ordenes</h3>
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

        <div className="flex flex-wrap gap-3  items-center">
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
        </div>
      </div>
      <table className="rounded-md overflow-hidden shadow-sm">
        <thead>
          <tr className="border-b-2 bg-slate-200 p-1 rounded-md">
            <th className="p-1">ID</th>
            <th className="p-1">Email</th>
            <th className="p-1">Fecha</th>
            <th className="p-1">Total</th>
            <th className="p-1">Pagado</th>
            <th className="p-1">Estado</th>
            <th className="p-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {falseArray[page - 1]?.map((e, key) => (
            <tr
              key={key}
              className="border-b-2 last:border-0 text-center bg-slate-50"
            >
              <td className="p-1">hola {e}</td>
              <td className="p-1">joe{e}@doe.com</td>
              <td className="p-1">22/01/2022</td>
              <td className="p-1">300</td>
              <td className="p-1">Si</td>
              <td className="p-1">
                <span className="text-sm mx-auto bg-green-500 px-2 p-1 rounded-full text-green-900 font-bold">
                  Enviado
                </span>
              </td>
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
      <div className="flex self-end items-center gap-3 font-medium p-2 bg-white rounded-md shadow ">
        {falseArray?.map((e, key) => (
          <button
            type="button"
            key={key}
            onClick={() => setPage(key + 1)}
            className={
              page === key + 1
                ? "font-bold text-palette-primary border-b-2 border-b-palette-primary aspect-square h-max w-auto block"
                : "border-b-2 border-transparent aspect-square h-max block"
            }
          >
            {key + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default List;
