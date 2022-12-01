import React, { useRef } from "react";
import { cartElement, Articulos } from "../fakedata";
import { IoMdTrash } from "react-icons/io";
import Counter from "../components/Counter";
const Cart = () => {
  let total = 0;
  const ref = useRef();
  return (
    <div className="min-h-screen w-full  antialiased overflow-hidden bg-slate-50 pt-20 relative snap-y snap-proximity">
      <div className="grid gap-2 md:grid-cols-[auto_max-content] auto-rows-max mx-auto max-w-screen-lg w-full">
        <div className="p-2 order-2 md:order-1">
          <h2 className="text-2xl font-bold py-2">SHOPPING CART</h2>
          <div className="flex flex-col gap-2">
            {cartElement.map((element) => {
              const el = Articulos.find(
                (articulo) => articulo.id === element.itemId
              );

              total += Number(el.precio);

              return (
                <div
                  key={el.id}
                  className="border-b-2  grid grid-cols-2 lg:grid-cols-5 items-center justify-center w-full bg-white rounded-md p-1"
                >
                  <img
                    src={el.img}
                    alt=""
                    className="w-20 aspect-square m-auto"
                  />
                  <h4 className="font-medium text-center">{el.nombre}</h4>
                  <p className="text-center font-medium text-xl text-palette-blue ">
                    {el.precio}$
                  </p>
                  <Counter def={element.itemCount} />
                  <div className="text-center col-span-full lg:col-span-1">
                    <button className="text-red-600 text-xl text-center">
                      <IoMdTrash />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-2 h-max flex flex-col order-1 md:order-2 ">
          <div className="border-2 border-b-0 p-2 rounded-t-md">
            <h3 className=" text-2xl font-bold">
              ELEMENTOS TOTALES({cartElement.length})
            </h3>
            <p className="font-medium text-palette-blue text-xl">${total}</p>
          </div>
          <div className="border-2 p-2 rounded-b-md">
            <a
              href="#"
              className="p-2 bg-palette-green/90 hover:bg-palette-green rounded-md text-white block text-center"
            >
              PROCEED CHECKOUT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
