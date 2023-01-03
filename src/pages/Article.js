import React from "react";
import { MdOutlineStar, MdShoppingCart } from "react-icons/md";
import { useParams } from "react-router-dom";
import Counter from "../components/Counter";
import { Articulos } from "../fakedata";

const Article = ({ props }) => {
  const { id } = useParams();
  const article = Articulos.find((a) => a.id === id);
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="grid auto-rows-max p-2  md:grid-cols-2 w-full max-w-screen-xl mx-auto">
        <div className="flex auto-rows-max gap-2 flex-col">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold py-1  text-palette-primary">
              <h2>{article.nombre}</h2>
              <span className="flex text-amber-500 items-center pb-2">
                {(() => {
                  let stars = [];
                  for (let i = 0; i < article.review; i++) {
                    stars.push(<MdOutlineStar />);
                  }
                  return stars;
                })()}
              </span>
            </div>
            <span className="text-2xl font-black py-1 text-palette-second ">
              ${article.precio}
            </span>
          </div>

          <p>
            Disponibles:{" "}
            <span className="font-bold text-palette-primary">
              {article.existencia} unidades
            </span>
          </p>
          <div className=" py-1 border-t-2">
            <h4 className="font-semibold">Descripción</h4>
            <p className="text-lg w-full text-justify">{article.desc}</p>
          </div>

          <p className="text-palette-second font-medium py-1">
            {article.filtros.colegios.map((colegio) => "#" + colegio + " ")}
            {article.filtros.grados.map((grado) => "#" + grado + " ")}
            {article.filtros.niveles.map((nivel) => "#" + nivel + " ")}
          </p>

          <div className="hidden md:flex items-center justify-between gap-3 border-palette-ext  w-full py-2">
            <Counter max={article.existencia} />
            <button className="bg-palette-ext/90 hover:bg-palette-ext flex items-center justify-center gap-2 rounded-md p-2 hover:text-white text-medium w-full">
              <MdShoppingCart /> Añadir al carro
            </button>
          </div>
        </div>
        <img
          src={article.img}
          alt={article.nombre}
          className="w-full md:w-full aspect-square mx-auto"
        />
        <div className="flex md:hidden items-center justify-between gap-3 border-palette-ext  w-full py-2">
          <Counter max={article.existencia} />
          <button className="bg-palette-ext/90 hover:bg-palette-ext flex items-center justify-center gap-2 rounded-md p-2 hover:text-white text-medium w-full">
            <MdShoppingCart /> Añadir al carro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
