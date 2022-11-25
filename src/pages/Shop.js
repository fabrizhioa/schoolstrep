import React from "react";
import { useSearchParams } from "react-router-dom";
import StringToUrl from "../adapters/StringToUrl";
import { Colegios, Articulos } from "../fakedata";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const grades = ["1ro", "2do", "3ro", "4to", "5to", "6to"];
  const level = ["primaria", "secundaria"];

  const handleFilter = (filter, textFilter) => {
    let newFilter;
    let oldFilter =
      searchParams.get(filter) !== null
        ? searchParams.get(filter).split("_")
        : [];

    if (oldFilter.length > 0 && oldFilter.includes(textFilter)) {
      newFilter = oldFilter.filter((value) => value !== textFilter);
    } else {
      newFilter = [...oldFilter, textFilter];
    }

    if (newFilter.length > 0) {
      searchParams.set(filter, newFilter.toString().replaceAll(",", "_"));
      setSearchParams(searchParams);
    } else {
      searchParams.delete(filter);
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row pt-20">
      <div className="min-h-full bg-slate-50 p-2 min-w-[290px]">
        <h2 className="text-xl font-bold">Filtros</h2>
        <details>
          <summary className="text-base font-semibold text-palette-green cursor-pointer">
            Colegios
          </summary>
          <div>
            {Colegios.map((colegio, key) => {
              return (
                <div key={key} className="flex gap-1 py-0.5">
                  <input
                    type="checkbox"
                    name="filter-collage"
                    className="accent-palette-blue cursor-pointer"
                    key={key}
                    id={"colegio" + colegio.id}
                    checked={
                      searchParams.get("colegios") !== null &&
                      searchParams
                        .get("colegios")
                        .split("_")
                        .includes(StringToUrl(colegio.nombre))
                    }
                    onChange={() =>
                      handleFilter("colegios", StringToUrl(colegio.nombre))
                    }
                  />
                  <span
                    className="font-medium"
                    htmlFor={"colegio" + colegio.id}
                  >
                    {colegio.nombre}
                  </span>
                </div>
              );
            })}
          </div>
        </details>
        <details>
          <summary className="text-base font-semibold text-palette-green cursor-pointer">
            Grado/Año academico
          </summary>
          <div>
            {grades.map((grado, key) => {
              return (
                <div key={key} className="flex gap-1 py-0.5">
                  <input
                    type="checkbox"
                    name="filter-collage"
                    className="accent-palette-blue cursor-pointer"
                    id={"grado" + grado}
                    checked={
                      searchParams.get("grados") !== null &&
                      searchParams
                        .get("grados")
                        .split("_")
                        .includes(StringToUrl(grado))
                    }
                    onChange={() => handleFilter("grados", StringToUrl(grado))}
                  />
                  <span className="font-medium" htmlFor={"grado" + grado}>
                    {grado}
                  </span>
                </div>
              );
            })}
          </div>
        </details>
        <details>
          <summary className="text-base font-semibold text-palette-green cursor-pointer">
            Nivel academico
          </summary>
          {level.map((lvl, key) => {
            return (
              <div key={key} className="flex gap-1 py-0.5 items-center">
                <input
                  type="checkbox"
                  name="filter-collage"
                  className="accent-palette-blue cursor-pointer"
                  id={"nivel" + lvl}
                  checked={
                    searchParams.get("niveles") !== null &&
                    searchParams
                      .get("niveles")
                      .split("_")
                      .includes(StringToUrl(lvl))
                  }
                  onChange={() => handleFilter("niveles", StringToUrl(lvl))}
                />
                <span className="font-medium" htmlFor={"nivel" + lvl}>
                  {lvl}
                </span>
              </div>
            );
          })}
        </details>

        <details>
          <summary className="text-base font-semibold text-palette-green cursor-pointer">
            Otros filtros
          </summary>
        </details>
      </div>
      <div className="min-h-full bg-slate-100    w-full grid gap-2 grid-cols-4 text-center auto-rows-max p-2">
        {Articulos.map((articulo, key) => {
          let colegios = searchParams.get("colegios");
          let grados = searchParams.get("grados");
          let niveles = searchParams.get("niveles");
          let isValidColegios = true;
          let isValidGrados = true;
          let isValidNiveles = true;

          if (colegios !== null) {
            colegios.split("_").map((colegio) => {
              if (!articulo.filtros.colegios.includes(colegio)) {
                isValidColegios = false;
              }
            });
          }

          if (grados !== null) {
            grados.split("_").map((grado) => {
              if (!articulo.filtros.grados.includes(grado)) {
                isValidGrados = false;
              }
            });
          }

          if (niveles !== null) {
            niveles.split("_").map((nivel) => {
              if (!articulo.filtros.niveles.includes(nivel)) {
                isValidNiveles = false;
              }
            });
          }

          if (isValidColegios && isValidGrados && isValidNiveles) {
            return (
              <div
                key={articulo.id}
                className="bg-white p-2 shadow-lg shadow-black/20 rounded-md "
              >
                <img
                  src={articulo.img}
                  alt={articulo.nombre}
                  className="w-40 aspect-square bg-slate-50 m-auto"
                />
                <h2 className="text-palette-green font-semibold text-base border-t-palette-yellow p-1 border-t-2">
                  {articulo.nombre}
                </h2>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Shop;
