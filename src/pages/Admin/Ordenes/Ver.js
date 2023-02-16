import React from "react";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import { Orders } from "../../../fakedata";
import Billing from "./subpages/Billing";
import Contact from "./subpages/Contact";
import Paying from "./subpages/Paying";
import Products from "./subpages/Products";
import Shipping from "./subpages/Shipping";
import State from "./subpages/State";
const Ver = () => {
  const { id } = useParams();
  const Element = Orders.find((order) => order.id.toString() === "123123123");
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
          <Route path="/" element={<Contact />} />
          <Route path="envio" element={<Shipping />} />
          <Route path="facturacion" element={<Billing />} />

          <Route path="Productos" element={<Products Element={Element} />} />

          <Route path="pago" element={<Paying element={Element} />} />
          <Route path="estado" element={<State estado={Element.state} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Ver;
