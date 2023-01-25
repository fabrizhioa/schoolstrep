import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import { Orders, Articulos } from "../../../fakedata";
const Ver = () => {
  const { id } = useParams();
  const Element = Orders.find((order) => order.id.toString() === "123123123");
  console.log(Element);
  const total = 0;
  return (
    <div className="flex flex-col gap-3 p-4 w-full h-full bg-slate-100">
      <h3 className="text-palette-primary font-bold text-xl p-2">
        Orden #{id}
      </h3>
      <div className="grid grid-cols-[max-content,auto]  bg-white rounded-md shadow overflow-hidden">
        <div className="flex flex-col gap-2 bg-palette-primary p-2">
          <NavLink
            to="./"
            className={({ isActive }) =>
              `py-1 px-2 font-bold ${isActive ? "text-white" : "text-blue-900"}`
            }
          >
            Contacto
          </NavLink>
          <NavLink
            to="./envio"
            className={({ isActive }) =>
              `py-1 px-2 font-bold ${isActive ? "text-white" : "text-blue-900"}`
            }
          >
            Envio
          </NavLink>
          <NavLink
            to="./facturacion"
            className={({ isActive }) =>
              `py-1 px-2 font-bold ${isActive ? "text-white" : "text-blue-900"}`
            }
          >
            Facturación
          </NavLink>
          <NavLink
            to="./productos"
            className={({ isActive }) =>
              `py-1 px-2 font-bold ${isActive ? "text-white" : "text-blue-900"}`
            }
          >
            Productos
          </NavLink>
          <NavLink
            to="./pago"
            className={({ isActive }) =>
              `py-1 px-2 font-bold ${isActive ? "text-white" : "text-blue-900"}`
            }
          >
            Pago
          </NavLink>
          <NavLink
            to="./estado"
            className={({ isActive }) =>
              `py-1 px-2 font-bold ${isActive ? "text-white" : "text-blue-900"}`
            }
          >
            Estado
          </NavLink>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="p-2 flex flex-col gap-2">
                <h4 className=" font-bold text-palette-primary">Contacto:</h4>
                <p className="p-2 border-2 rounded-md">
                  Correo:<span> joe@doe.com</span>
                </p>
              </div>
            }
          />
          <Route
            path="envio"
            element={
              <div className="p-2 flex flex-col gap-2">
                <h4 className=" font-bold text-palette-primary">
                  Dirección de entrega:
                </h4>
                <p className="p-2 border-2 rounded-md">
                  Calle:<span> joe@doe.com</span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Colonia:<span></span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Numero:<span></span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Ciudad:<span></span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Estado:<span></span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Codigo Postal:<span></span>
                </p>
              </div>
            }
          />

          <Route
            path="facturacion"
            element={
              <div className="p-2 flex flex-col gap-2">
                <h4 className=" font-bold text-palette-primary">
                  Facturación:
                </h4>
                <p className="p-2 border-2 rounded-md">
                  Nombre:<span> joe doe</span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  RFC:<span> joe@doe.com</span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Uso de CFDI:<span> joe@doe.com</span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Calle:<span> joe@doe.com</span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Colonia:<span></span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Numero:<span></span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Ciudad:<span></span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Estado:<span></span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Pais:<span></span>
                </p>
                <p className="p-2 border-2 rounded-md">
                  Codigo Postal:<span></span>
                </p>
              </div>
            }
          />

          <Route
            path="Productos"
            element={
              <div className="p-2 flex flex-col gap-2">
                <div className="flex flex-col gap-4 p-3 bg-white">
                  {Element.elements.map((element) => {
                    const el = Articulos.find(
                      (articulo) => articulo.id === element.id
                    );

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
                            <h4 className="font-semibold text-lg ">
                              {el.nombre}
                            </h4>
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
                            <p className="text-sm">
                              {Element.shippingContact.email}
                            </p>
                            <p className="text-sm">
                              {Element.shippingContact.phone}
                            </p>
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
                </div>
              </div>
            }
          />

          <Route
            path="pago"
            element={
              <div className="p-4 flex flex-col gap-2">
                <h4 className="text-lg font-semibold">Información de pagos</h4>

                <div className="flex items-center gap-2">
                  <FaCcVisa className="text-4xl text-palette-primary" />
                  <p className="font-semibold">Ending with 4242</p>
                  <span className="text-sm">Expires 02/24</span>
                </div>
                <div className="rounded-md text-palette-second">
                  <div className="flex justify-between py-2 items-center font-medium border-b-2 border-palette-second">
                    <p>Subtotal </p>
                    <p>${Element.total * 0.84}</p>
                  </div>
                  <div className="flex justify-between py-2 items-center font-medium border-b-2 border-palette-second">
                    <p>Inpuestos </p>
                    <p>${Element.total * 0.16}</p>
                  </div>
                  <div className="flex justify-between py-2 items-center font-medium border-b-4 border-palette-primary">
                    <p>Envio </p>
                    <p>${14}</p>
                  </div>
                  <div className="font-semibold text-palette-blue text-lg flex justify-between py-2">
                    <p>Total</p> <p>${Element.total + 14}</p>{" "}
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="estado"
            element={
              <div className="flex flex-col items-center justify-center gap-2 text-center p-4">
                <h2 className="text-2xl font-bold text-palette-primary">
                  Estado
                </h2>
                <p className="text-palette-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  sapiente nobis, ab pariatur rerum excepturi culpa reiciendis,
                  dolore praesentium voluptas autem cum dicta nostrum minus
                  ratione, consequuntur blanditiis. Dignissimos, laborum?
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Ver;
