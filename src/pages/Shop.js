import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import StringToUrl from "../adapters/StringToUrl";
import { Articulos } from "../fakedata";
import { MdFilterListAlt } from "react-icons/md";

//Componentes
import SelectOrder from "../components/SelectOrder";
import FilterDetail from "../components/FilterDetail";
import ShopArticle from "../components/ShopArticle";
import ModalForm from "../components/ModalForm";

const Shop = ({ openCartAction }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articulos, setArticulos] = useState(Articulos);
  const [mobileFilterView, setMobileFilterView] = useState(false);
  const [verModal, setVerModal] = useState(false);
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
  const estudiantes =
    sessionStorage.getItem("estudiantes") !== null
      ? JSON.parse(sessionStorage.getItem("estudiantes"))
      : [];
  useEffect(() => {
    if (sessionStorage.getItem("estudiantes") === null) {
      setVerModal(true);
    }
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
    <>
      {verModal && <ModalForm setVerModal={setVerModal} />}
      <div className="min-h-screen w-full h-full grid md:grid-rows-[max-content_auto] md:grid-cols-[minmax(0,290px)_auto] relative">
        <div className="bg-slate-50 w-full col-span-full h-max flex justify-end">
          <SelectOrder handleFilter={handleFilter} />
        </div>
        <div
          className={`min-h-full bg-slate-50 p-2 fixed md:static  transition-all duration-300 top-20 ${
            mobileFilterView ? "left-0" : "right-full"
          }`}
        >
          <h2 className="text-xl text-palette-second font-bold flex justify-between items-center relative">
            Filtros{" "}
            <button
              className="fixed bg-palette-second text-white rounded-full bottom-4 md:mt-0  ml-4 md:ml-0 p-4 md:p-0 w-max text-2xl right-2 md:static shadow-sm md:shadow-none md:bg-transparent md:text-palette-second"
              type="button"
              onClick={() => setMobileFilterView(!mobileFilterView)}
            >
              <MdFilterListAlt className="" />
            </button>
          </h2>
          <FilterDetail title="Estudiantes">
            <div>
              {estudiantes.map((estudiante, key) => {
                return (
                  <div key={key} className="flex gap-1 px-2 py-1 w-full">
                    <input
                      type="checkbox"
                      name="filter-collage"
                      className="accent-palette-second cursor-pointer"
                      key={key}
                      id={"estudiante" + key}
                      checked={
                        searchParams.get("grados") !== null &&
                        searchParams
                          .get("grados")
                          .split("_")
                          .includes(StringToUrl(estudiante.grado))
                      }
                      onChange={() =>
                        handleFilter("grados", StringToUrl(estudiante.grado))
                      }
                    />
                    <span className="font-medium" htmlFor={"estudiante" + key}>
                      {estudiante.nombre}
                    </span>
                  </div>
                );
              })}
            </div>
          </FilterDetail>
          <FilterDetail
            title="Grado/Año Academico"
            childrenCN={
              "inline-grid h-max grid-cols-[max-content_max-content] auto-rows-max"
            }
          >
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

          <FilterDetail title="Enlaces"></FilterDetail>
          <button
            className="bg-palette-ext text-palette-second font-semibold p-2 rounded-md w-full hover:bg-palette-primary hover:text-white shadow-md active:shadow-none"
            type="button"
            onClick={() => setVerModal(true)}
          >
            Configuración
          </button>
        </div>
        <div className="min-h-full bg-slate-100 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] auto-rows-max  w-full gap-2 md:p-4 lg:p-4 md:gap-4 lg:gap-8 text-center p-2 ">
          {articulos.map((articulo) => (
            <ShopArticle
              articulo={articulo}
              key={articulo.id}
              openCartAction={openCartAction}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
