import React from "react";
import { MdClose } from "react-icons/md";
import { cartElement, Articulos } from "../fakedata";

const ModalCart = ({ closeCartAction, isView }) => {
  let total = 0;
  return (
    <div
      className={`fixed z-30 h-max max-h-screen transition-all duration-500 bg-white rounded-tl-md shadow-md w-72 ${
        isView ? "bottom-0 right-0" : "-bottom-full -right-full"
      }`}
    >
      <div className="flex justify-between w-full p-2 items-center">
        <h2 className="text-lg font-bold text-palette-primary">
          Carrito de compras
        </h2>
        <button
          type="button"
          onClick={closeCartAction}
          className="text-lg font-bold  flex items-center justify-center rounded-md transition-all duration-200 hover:bg-palette-ext p-2"
        >
          <MdClose />
        </button>
      </div>
      <div className="flex gap-2 flex-col p-2">
        {cartElement.map((element) => {
          const el = Articulos.find(
            (articulo) => articulo.id === element.itemId
          );

          total += Number(el.precio);

          return (
            <div
              key={el.id}
              className="border-b-2 last:border-b-0 grid grid-cols-[max-content,auto] items-center w-full p-1 gap-2"
            >
              <div className="w-16 h-16 aspect-square">
                <img src={el.img} alt={el.nombre} />
              </div>
              <div className="grid grid-cols-[minmax(0,1fr),max-content] place-content-center items-center gap-3 auto-rows-auto">
                <div>
                  <h3 className="text-sm font-semibold">{el.nombre}</h3>
                  <p className="text-xs">{el.desc}</p>
                </div>
                <div>
                  <p className="font-semibold">${el.precio}</p>
                </div>
                <div>
                  <p className="text-xs">Cantidad:{" " + element.itemCount}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-red-500 text-xs font-medium"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-2 bg-palette-primary text-white flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Subtotal</p>
          <p className="font-semibold">${total}</p>
        </div>

        <div>
          <button
            type="button"
            className="w-full block p-2 bg-palette-ext text-palette-second font-semibold rounded-md hover:text-white drop-shadow-md active:drop-shadow-none"
          >
            PAGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
