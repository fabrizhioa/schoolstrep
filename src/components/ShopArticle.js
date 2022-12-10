import React from "react";
import { MdOutlineStar, MdShoppingCart } from "react-icons/md";
import Counter from "./Counter";

const ShopArticle = ({ articulo }) => {
  return (
    <div className="bg-white p-2 shadow-lg shadow-black/20 rounded-md w-full md:w-72 h-max">
      <a
        href={"./articulo/" + articulo.id}
        className="flex flex-col items-center justify-center group"
      >
        <img
          src={articulo.img}
          alt={articulo.nombre}
          className="group-hover:brightness-125 bg-white block w-full aspect-square  rounded-md  p-2 m-auto "
        />
        <h2 className="text-palette-primary font-semibold text-base border-t-palette-ext p-1 border-t-2 w-full">
          {articulo.nombre}
        </h2>
        <span className="flex text-amber-500 items-center pb-2">
          {(() => {
            let stars = [];
            for (let i = 0; i < articulo.review; i++) {
              stars.push(<MdOutlineStar key={i} />);
            }
            return stars;
          })()}
        </span>
      </a>
      <div className="flex justify-between items-center w-full">
        <Counter def={1} max={articulo.existencia} />

        <p className="font-semibold text-xl w-full text-right">
          ${articulo.precio}
        </p>
      </div>
      <button className="w-full bg-palette-ext/90 hover:bg-palette-ext flex items-center justify-center gap-2 rounded-md mt-2 p-2 hover:text-white text-medium">
        <MdShoppingCart /> add to cart
      </button>
    </div>
  );
};

export default ShopArticle;
