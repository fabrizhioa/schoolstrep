import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Empty from "../../../components/Admin/Empty";
import { Colegios } from "../../../fakedata";

const List = () => {
  console.log(Colegios);
  return Colegios.length <= 0 ? (
    <Empty
      text="no hay escuelas"
      image="/assets/school_empty.svg"
      link={{ text: "Agregar nueva escuela", url: "crear" }}
    />
  ) : (
    <div className="flex flex-col gap-3 p-4 w-full h-full bg-slate-100">
      <h3 className="text-palette-primary font-bold text-xl p-2">Escuelas</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] auto-rows-auto gap-4 w-full ">
        {Colegios.map((colegio) => (
          <div
            key={colegio.id}
            className="p-2 bg-white grid grid-rows-[1fr,max-content] justify-center items-center rounded-md gap-4 shadow-sm shadow-palette-second/30 relative overflow-hidden group aspect-square  "
          >
            <div className="bg-palette-second/60 w-full h-full z-10 absolute hidden items-center justify-center group-hover:flex">
              <Link className="p-2 px-4 rounded-md border-2 border-white text-white capitalize font-semibold hover:bg-white/30">
                editar
              </Link>
            </div>

            <img
              src={colegio.img}
              alt={colegio.nombre}
              className=" w-2/3 aspect-square h-max mx-auto"
            />

            <p className="p-2 border-t-2 w-full font-bold text-center">
              {colegio.nombre}
            </p>
          </div>
        ))}
        <Link
          to="crear"
          className="p-2 bg-white flex justify-center flex-col items-center rounded-md gap-2 relative overflow-hidden group aspect-square shadow-sm shadow-palette-second/30"
        >
          <FaPlus className="text-5xl text-palette-ext drop-shadow-sm" />
        </Link>
      </div>
    </div>
  );
};

export default List;
