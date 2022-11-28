import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import StringToUrl from "../adapters/StringToUrl";
import { Colegios, Articulos } from "../fakedata";
import { MdFilterListAlt } from "react-icons/md";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articulos, setArticulos] = useState(Articulos);
  const [mobileFilterView, setMobileFilterView] = useState(false);
  const grades = ["1ro", "2do", "3ro", "4to", "5to", "6to"];
  const level = ["primaria", "secundaria"];

  useEffect(() => {
    let filter = Articulos.filter((articulo) => {
      let colegios = searchParams.get("colegios");
      let grados = searchParams.get("grados");
      let niveles = searchParams.get("niveles");

      let isValidColegios = undefined;
      let isValidGrados = undefined;
      let isValidNiveles = undefined;

      if (colegios !== null) {
        colegios.split("_").forEach((colegio) => {
          if (articulo.filtros.colegios.includes(colegio)) {
            isValidColegios = true;
          }
        });
      }

      if (grados !== null) {
        grados.split("_").forEach((grado) => {
          if (articulo.filtros.grados.includes(grado)) {
            isValidGrados = true;
          }
        });
      }

      if (niveles !== null) {
        niveles.split("_").forEach((nivel) => {
          if (articulo.filtros.niveles.includes(nivel)) {
            isValidNiveles = true;
          }
        });
      }

      let valid =
        (colegios === null || isValidColegios) &&
        (grados === null || isValidGrados) &&
        (niveles === null || isValidNiveles);

      console.log(valid);

      return (
        (colegios === null || isValidColegios) &&
        (grados === null || isValidGrados) &&
        (niveles === null || isValidNiveles)
      );
    });

    let orden = searchParams.get("orden");

    if (orden !== null) {
      switch (orden) {
        case "most-popular":
          setArticulos(filter);
          break;
        case "best-rating":
          setArticulos(filter);
          break;
        case "newest":
          setArticulos(filter);
          break;
        case "low-to-high":
          filter.sort((a, b) => a.precio - b.precio);
          setArticulos(filter);
          break;
        case "high-to-low":
          filter.sort((a, b) => b.precio - a.precio);

          setArticulos(filter);
          break;
        default:
          setArticulos(filter);
          break;
      }
    }
  }, [searchParams]);

  const handleFilter = (filter, textFilter, type = "multi") => {
    let newFilter;

    if (type === "multi") {
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
    } else {
      if (textFilter.length > 0) {
        searchParams.set(filter, textFilter);
        setSearchParams(searchParams);
      } else {
        searchParams.delete(filter);
        setSearchParams(searchParams);
      }
    }
  };

  return (
    <div className="min-h-screen w-full h-full flex flex-col md:flex-row pt-20 relative">
      <div
        className={`min-h-full bg-slate-50 p-2 min-w-[290px] fixed lg:static  transition-all  top-20 ${
          mobileFilterView ? "left-0" : "right-full"
        }`}
      >
        <h2 className="text-xl font-bold flex justify-between items-center relative">
          Filtros{" "}
          <button
            className="absolute bg-slate-50 -mt-3 lg:mt-0  ml-2 lg:ml-0 p-2 lg:p-0 w-max text-base left-full lg:static"
            type="button"
            onClick={() => setMobileFilterView(!mobileFilterView)}
          >
            <MdFilterListAlt className="" />
          </button>
        </h2>
        <details>
          <summary className="text-base font-semibold text-palette-green cursor-pointer">
            Orden
          </summary>
          <div>
            <select
              onChange={(e) => handleFilter("orden", e.target.value, "unique")}
              className="bg-white px-2 py-1 w-full cursor-pointer"
            >
              <option value="">Por defecto</option>
              <option value="most-popular">Most Popular</option>
              <option value="best-rating">Best Rating</option>
              <option value="newest">Newest</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </details>
        <details>
          <summary className="text-base font-semibold text-palette-green cursor-pointer">
            Colegios
          </summary>
          <div>
            {Colegios.map((colegio, key) => {
              return (
                <div key={key} className="flex gap-1 px-2 py-1 w-full">
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
          <div className="grid gap-x-4 grid-cols-[max-content_max-content] auto-rows-auto">
            {grades.map((grado, key) => {
              return (
                <div key={key} className="flex gap-1 py-1 px-2 w-full">
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
              <div
                key={key}
                className="flex gap-1 p-2 py-1 w-full items-center"
              >
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
      <div className="min-h-full bg-slate-100 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 w-full gap-2 text-center auto-rows-max p-2">
        {articulos.map((articulo) => (
          <div
            key={articulo.id}
            className="bg-white p-2 shadow-lg shadow-black/20 rounded-md   flex flex-col items-center justify-center"
          >
            <img
              src={articulo.img}
              alt={articulo.nombre}
              className="w-40 aspect-square bg-slate-50 m-auto "
            />
            <h2 className="text-palette-green font-semibold text-base border-t-palette-yellow p-1 border-t-2 w-full">
              {articulo.nombre}
            </h2>
            <p>${articulo.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
