import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { Orders, Articulos } from "../fakedata";

const Details = () => {
  const [searchParams] = useSearchParams();
  const ElementId = searchParams.get("orderId");
  const Element = Orders.find((order) => order.id.toString() === ElementId);
  let total = 0;
  return (
    <div className="min-h-screen pt-20 w-full bg-gradient-to-tr from-slate-50 to-blue-50">
      <section className="p-3 max-w-screen-xl mx-auto w-full ">
        <h2 className="font-bold text-xl text-palette-second p-4 bg-palette-primary rounded-t-md">
          Orden #{ElementId}
        </h2>

        <div className="flex flex-col gap-4 p-3 bg-white">
          {Element.elements.map((element) => {
            const el = Articulos.find((articulo) => articulo.id === element.id);

            total += Number(el.precio);

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
                    <p className="text-base text-palette-blue font-bold">
                      ${el.precio * element.count}
                    </p>
                  </div>
                  <div className="p-2">
                    <h4 className="text-lg font-semibold">
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
                    <h4 className="text-lg font-semibold">
                      Contacto del comprador
                    </h4>
                    <p className="text-sm">{Element.shippingContact.email}</p>
                    <p className="text-sm">{Element.shippingContact.phone}</p>
                  </div>
                </div>

                <div className="w-full col-span-full p-2">
                  <p className="text-base font-bold">
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
                      <span className="font-semibold capitalize">
                        pedido realizado
                      </span>
                    </div>
                    <div className="z-[1]  flex flex-col items-center w-full">
                      <div className="w-4 h-4 bg-palette-ext rounded-full"></div>
                      <span className="font-semibold capitalize">
                        procesando
                      </span>
                    </div>
                    <div className="z-[1]  flex flex-col w-full items-center">
                      <div className="w-4 h-4  bg-palette-ext rounded-full"></div>
                      <span className="font-semibold capitalize">enviado</span>
                    </div>
                    <div className="z-[1] w-full flex flex-col items-end">
                      <div className="w-4 h-4 bg-palette-ext  rounded-full"></div>
                      <span className="font-semibold capitalize">
                        entregado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full bg-blue-100 rounded-b-md p-4 grid md:grid-cols-[30%_30%_40%]">
          <div className="p-2">
            <h4 className="text-lg font-semibold">Dirección de Envio</h4>
            <p>
              {Element.shippingAddress.direccion}
              <br />
              {Element.shippingAddress.zipCode +
                " " +
                Element.shippingAddress.estado}
              <br />
              {Element.shippingAddress.ciudad +
                ", " +
                Element.shippingAddress.apartamento}
            </p>
          </div>
          <div className="p-2">
            <h4 className="text-lg font-semibold">Información de pagos</h4>
            <div className="flex items-center gap-2">
              <FaCcVisa className="text-4xl text-palette-primary" />
              <div>
                <p className="font-semibold">Ending with 4242</p>
                <span className="text-sm">Expires 02/24</span>
              </div>
            </div>
          </div>

          <div className=" p-2 rounded-md text-palette-second">
            <div className="flex justify-between py-2 items-center font-medium border-b-2 border-palette-second">
              <p>Subtotal </p>
              <p>${total * 0.84}</p>
            </div>
            <div className="flex justify-between py-2 items-center font-medium border-b-2 border-palette-second">
              <p>Inpuestos </p>
              <p>${total * 0.16}</p>
            </div>
            <div className="flex justify-between py-2 items-center font-medium border-b-4 border-palette-primary">
              <p>Envio </p>
              <p>${14}</p>
            </div>
            <div className="font-semibold text-palette-blue text-lg flex justify-between py-2">
              <p>Total</p> <p>${total + 14}</p>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
