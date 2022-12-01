import React from "react";
import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Counter from "../components/Counter";
import { Articulos } from "../fakedata";

const Article = ({ props }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const article = Articulos.find((a) => a.id === id);
  return (
    <div className="pt-20 min-h-screen w-full bg-white">
      <div className="grid auto-rows-max p-2 md:grid-cols-2 w-full max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold py-1 flex items-center text-palette-green">
            {" "}
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="text-4xl py-1 font-bold"
            >
              <MdArrowBack />
            </button>
            {article.nombre}
          </h2>
          <span className="text-xl font-medium py-1 text-palette-blue ">
            {article.id}
          </span>
          <p className="text-lg py-1 border-t-2 border-t-palette-yellow w-full text-justify">
            {article.desc}
          </p>
          <p className="text-palette-blue font-medium py-1">
            {article.filtros.colegios.map((colegio) => "#" + colegio + " ")}
            {article.filtros.grados.map((grado) => "#" + grado + " ")}
            {article.filtros.niveles.map((nivel) => "#" + nivel + " ")}
          </p>
        </div>
        <div className="flex flex-col p-3 gap-3">
          <img
            src={article.img}
            alt={article.nombre}
            className="w-full md:w-1/2 aspect-square mx-auto"
          />
          <div className="flex flex-col items-center justify-center gap-3 border-t-2 border-palette-yellow p-2">
            <Counter />
            <button className="w-max mx-auto bg-palette-yellow/90 hover:bg-palette-yellow flex items-center justify-center gap-2 rounded-md mt-2 p-2 hover:text-white text-medium">
              <MdShoppingCart /> Añadir al carro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
