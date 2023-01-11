import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Empty from "../../../components/Admin/Empty";
import { Articulos } from "../../../fakedata";

const List = () => {
  const [countView, setCountView] = useState(5);
  const [search, setSearch] = useState("");
  //data falsa para pruebas porque no existe
  const [listArticle, setListArticle] = useState([]);

  useEffect(() => {
    let newArray = Articulos;
    if (search.length > 0) {
      //funcion de busqueda
      newArray = Articulos.filter((element) => element.nombre.includes(search));
    }
    setListArticle(newArray);
  }, [countView, search]);
  const empty = true;
  return listArticle.length === 0 ? (
    <Empty
      text="No hay productos"
      image="/assets/product_empty.svg"
      link={{ text: "Agregar nuevo producto", url: "crear" }}
    />
  ) : (
    <div className="flex flex-col gap-3 p-4 w-full h-full bg-slate-100">
      <h3 className="text-palette-primary font-bold text-xl p-2">Productos</h3>
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

        <Link
          to={"crear"}
          className="bg-palette-primary hover:bg-palette-ext font-bold text-white drop-shadow-md active:drop-shadow-none p-2 px-4 rounded-md"
        >
          Agregar nuevo
        </Link>
      </div>
      <table className="rounded-md overflow-hidden shadow-sm">
        <thead>
          <tr className="border-b-2 bg-slate-200 p-1 rounded-md">
            <th className="p-1">Producto</th>
            <th className="p-1">Id</th>
            <th className="p-1">Marca</th>
            <th className="p-1">Categoria</th>
            <th className="p-1">Estado</th>

            <th className="p-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listArticle.map((e, key) => (
            <tr
              key={key}
              className="border-b-2 last:border-0 text-center bg-slate-50 place-items-center "
            >
              <td className="p-1">
                <div className="flex items-center gap-2">
                  <img src={e.img} alt={e.nombre} className="w-12 h-12" />
                  <div className="text-left">
                    <p className="text-sm font-bold">{e.nombre}</p>
                    <span className="text-xs">{e.desc}</span>
                  </div>
                </div>
              </td>
              <td className="p-1">{e.id}</td>
              <td className="p-1">{e.filtros.marca}</td>
              <td className="p-1">{e.filtros.subcategorias}</td>
              <td className="p-1">
                {e.existencia ? (
                  <span className="font-bold text-lg">{e.existencia}</span>
                ) : (
                  <span className="font-bold p-1 px-2 text-xs text-center w-max block text-red-900 bg-red-400 rounded-full">
                    Sin Existencias
                  </span>
                )}
              </td>
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
