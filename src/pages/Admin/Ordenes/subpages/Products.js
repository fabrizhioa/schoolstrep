import React from "react";
import { useParams } from "react-router-dom";
import { Input } from "../../../../components/Admin/Inputs";
import { Articulos } from "../../../../fakedata";
const Products = ({ Element }) => {
  const { id } = useParams();
  return (
    <form className="p-4 flex flex-col gap-2">
      <div className="border-2 rounded-md p-2 gap-3 grid grid-cols-4">
        <Input title="Estado" name="estado" />
        <Input title="Paqueteria" name="paqueteria" />
        <Input title="Track Id" name="track" />

        <button className="text-lg font-bold p-2 px-4 rounded-md bg-palette-ext hover:text-white">
          Aplicar
        </button>
      </div>

      <table className="text-center border-separate rounded-lg border-spacing-0 border-2">
        <thead>
          <tr className="p-2">
            <th className="p-2 bg-palette-primary text-white rounded-tl-md"></th>
            <th className="p-2 bg-palette-primary text-white">Producto</th>
            <th className="p-2 bg-palette-primary text-white">
              Id del Producto
            </th>
            <th className="p-2 bg-palette-primary text-white">Estado</th>
            <th className="p-2 bg-palette-primary text-white">Paqueteria</th>
            <th className="p-2 bg-palette-primary text-white rounded-tr-md">
              Track Id
            </th>
          </tr>
        </thead>
        <tbody>
          {Element.elements.map((element) => {
            const el = Articulos.find((articulo) => articulo.id === element.id);
            return (
              <tr key={el.id}>
                <td className="p-2">
                  <input
                    type="checkbox"
                    name={"elemento_" + el.id + "_" + id}
                  />
                </td>
                <td className="p-2">{el.nombre}</td>
                <td className="p-2">{el.id}</td>
                <td className="p-2">{element.state}</td>
                <td className="p-2">{element.parcel}</td>
                <td className="p-2">{element.trackId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div className="flex flex-col gap-4 p-3 bg-white">
        {

          return (
            <div
              key={el.id}
              className="grid md:grid-cols-[180px_auto]  items-center w-full bg-white  shadow-gray-600/30  rounded-md p-2 gap-2 h-max border-2"
            >
              <img
                src={el.img}
                alt=""
                className="w-full aspect-square m-auto"
              />
              <div className="grid lg:grid-cols-[auto_max-content_max-content] gap-4 items-start">
                <div className="p-2">
                  <h4 className="font-semibold text-lg ">{el.nombre}</h4>
                  <p className="text-sm">{el.desc}</p>
                  <p className="text-lg text-palette-blue font-bold">
                    ${el.precio * element.count}
                  </p>
                </div>
                <div className="p-2">
                  <h4 className="text-base font-semibold">
                    Dirección de Entrega
                  </h4>
                  <p className="text-sm">
                    {Element.shippingAddress.direccion}
                    <br />
                    {Element.shippingAddress.zipCode +
                      " " +
                      Element.shippingAddress.estado}
                    <br />
                    {Element.shippingAddress.ciudad +
                      " " +
                      Element.shippingAddress.apartamento}
                  </p>
                </div>
                <div className="p-2">
                  <h4 className="text-base font-semibold">
                    Contacto del comprador
                  </h4>
                  <p className="text-sm">{Element.shippingContact.email}</p>
                  <p className="text-sm">{Element.shippingContact.phone}</p>
                </div>
              </div>

              <div className="w-full col-span-full p-2">
                <p className="text-sm font-bold">
                  Enviado el 23 de marzo, 2022
                </p>
                <div className="grid grid-cols-4 p-0 w-full justify-between md:place-items-center relative text-xs md:text-sm">
                  <div
                    className={
                      "absolute w-full mx-auto h-2 cols-span-full top-1 block bg-blue-50 rounded-full after:rounded-full after:h-full  after:bg-palette-primary after:absolute z-0 " +
                      (element.shippingStatus === 0
                        ? "after:w-[1%]"
                        : element.shippingStatus === 1
                        ? "after:w-[38%]"
                        : element.shippingStatus === 2
                        ? "after:w-[63%]"
                        : "after:w-full")
                    }
                  ></div>

                  <div className="w-full z-[1] flex flex-col ">
                    <div className="w-4 h-4 bg-palette-ext rounded-full"></div>
                    <span className="font-semibold capitalize text-xs">
                      pedido realizado
                    </span>
                  </div>
                  <div className="z-[1]  flex flex-col items-center w-full">
                    <div className="w-4 h-4 bg-palette-ext rounded-full"></div>
                    <span className="font-semibold capitalize text-xs">
                      procesando
                    </span>
                  </div>
                  <div className="z-[1]  flex flex-col w-full items-center">
                    <div className="w-4 h-4  bg-palette-ext rounded-full"></div>
                    <span className="font-semibold capitalize text-xs">
                      enviado
                    </span>
                  </div>
                  <div className="z-[1] w-full flex flex-col items-end">
                    <div className="w-4 h-4 bg-palette-ext  rounded-full"></div>
                    <span className="font-semibold capitalize text-xs">
                      entregado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </form>
  );
};

export default Products;
