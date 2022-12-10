import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import StringToUrl from "../adapters/StringToUrl";
import { Colegios, Articulos } from "../fakedata";
import { MdFilterListAlt } from "react-icons/md";
import SelectOrder from "../components/SelectOrder";
import FilterDetail from "../components/FilterDetail";
import ShopArticle from "../components/ShopArticle";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articulos, setArticulos] = useState(Articulos);
  const [mobileFilterView, setMobileFilterView] = useState(false);
  const grades = [
    "1ro",
    "2do",
    "3ro",
    "4to",
    "5to",
    "6to",
    "7mo",
    "8vo",
    "9no",
    "10mo",
    "11vo",
  ];
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
          break;
        case "best-rating":
          filter.sort((a, b) => b.review - a.review);
          break;
        case "newest":
          break;
        case "low-to-high":
          filter.sort((a, b) => a.precio - b.precio);

          break;
        case "high-to-low":
          filter.sort((a, b) => b.precio - a.precio);

          break;
        default:
          break;
      }
    }
    setArticulos(filter);
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
    <div className="min-h-screen w-full h-full grid md:grid-rows-[max-content_auto] lg:grid-cols-[minmax(0,290px)_auto] pt-20 relative">
      <div className="bg-slate-50 w-full col-span-full h-max flex justify-end">
        <SelectOrder handleFilter={handleFilter} />
      </div>
      <div
        className={`min-h-full bg-slate-50 p-2 min-w-[290px] fixed lg:static  transition-all  top-20 ${
          mobileFilterView ? "left-0" : "right-full"
        }`}
      >
        <h2 className="text-xl text-palette-second font-bold flex justify-between items-center relative">
          Filtros{" "}
          <button
            className="fixed bg-palette-second text-white rounded-full bottom-4 lg:mt-0  ml-4 lg:ml-0 p-4 lg:p-0 w-max text-2xl right-2 lg:static shadow-sm lg:shadow-none lg:bg-transparent lg:text-palette-second   "
            type="button"
            onClick={() => setMobileFilterView(!mobileFilterView)}
          >
            <MdFilterListAlt className="" />
          </button>
        </h2>
        <FilterDetail title="Colegios">
          <div>
            {Colegios.map((colegio, key) => {
              return (
                <div key={key} className="flex gap-1 px-2 py-1 w-full">
                  <input
                    type="checkbox"
                    name="filter-collage"
                    className="accent-palette-second cursor-pointer"
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
        </FilterDetail>
        <FilterDetail title="Grado/Año Academico">
          <div className="grid gap-x-4 grid-cols-[max-content_max-content] auto-rows-auto">
            {grades.map((grado, key) => {
              return (
                <div key={key} className="flex gap-1 py-1 px-2 w-full">
                  <input
                    type="checkbox"
                    name="filter-collage"
                    className="accent-palette-second cursor-pointer"
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
        </FilterDetail>
        <FilterDetail title="Nivel Academico">
          {level.map((lvl, key) => {
            return (
              <div
                key={key}
                className="flex gap-1 p-2 py-1 w-full items-center"
              >
                <input
                  type="checkbox"
                  name="filter-collage"
                  className="accent-palette-second cursor-pointer"
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
        </FilterDetail>

        <FilterDetail title="Otros Filtros"></FilterDetail>
      </div>
      <div className="min-h-full bg-slate-100 flex flex-wrap  w-full gap-2 text-center p-2 justify-evenly">
        {articulos.map((articulo) => (
          <ShopArticle articulo={articulo} key={articulo.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
