import React from "react";
import { cartElement, Articulos } from "../fakedata";
import { IoMdTrash } from "react-icons/io";
import Counter from "../components/Counter";

// AGREGAR PALABRA ELIMINAR
const Cart = () => {
  let total = 0;
  return (
    <div className="min-h-screen w-full  antialiased overflow-hidden bg-slate-50 pt-20 relative snap-y snap-proximity">
      <div className="grid gap-4   md:grid-cols-[auto_max-content] auto-rows-max mx-auto max-w-screen-xl w-full">
        <h2 className="text-2xl font-bold p-2 col-span-full">Shopping Cart</h2>
        <div className=" order-2 md:order-1">
          <div className="flex flex-col gap-2">
            {cartElement.map((element) => {
              const el = Articulos.find(
                (articulo) => articulo.id === element.itemId
              );

              total += Number(el.precio);

              return (
                <div
                  key={el.id}
                  className="border-b-2  grid grid-cols-2 lg:grid-cols-4 items-center w-full bg-white rounded-md p-1 gap-2"
                >
                  <img
                    src={el.img}
                    alt=""
                    className="w-full lg:w-20 aspect-square m-auto"
                  />
                  <h4 className="font-medium text-start ">{el.nombre}</h4>
                  <p className="text-center text-xl text-palette-blue font-bold">
                    ${el.precio}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 p-1">
                    <Counter def={element.itemCount} />
                    <button className="bg-red-600 text-white  text-center col-span-full lg:col-span-1  w-max lg:w-max flex items-center justify-center rounded-md p-3">
                      <IoMdTrash />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-2 h-max flex flex-col order-1 md:order-2  shadow-sm shadow-black/20 bg-white rounded-md">
          <div className=" p-2 rounded-t-md bg-white">
            <h3 className=" text-xl font-bold text-palette-primary">
              Resumen del pedido{" "}
              <span className="text-xs block font-medium">
                {cartElement.length} Elementos
              </span>
            </h3>
            <div className="flex justify-between py-2 items-center font-medium border-b-2">
              <p>Subtotal </p>
              <p>${total * 0.84}</p>
            </div>
            <div className="flex justify-between py-2 items-center font-medium border-b-2">
              <p>Inpuestos </p>
              <p>${total * 0.16}</p>
            </div>
            <div className="flex justify-between py-2 items-center font-medium border-b-4 border-cyan-800">
              <p>Envio </p>
              <p>${14}</p>
            </div>
            <div className="font-medium text-palette-blue text-xl flex justify-between py-2">
              <p>Total</p> <p>${total + 14}</p>{" "}
            </div>
          </div>
          <div className=" p-2 rounded-b-md bg-white">
            <a
              href="./#"
              className="p-2 bg-palette-second hover:bg-palette-primary rounded-md text-white block text-center bg-prim"
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
