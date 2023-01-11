import React from "react";
import { MdArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="min-w-[290px] p-2 bg-palette-primary min-h-full flex flex-col justify-start">
      <h2 className="text-center font-bold text-white text-xl py-4 justify-self-start ">
        ScroolTrep Dashboard
      </h2>
      <nav className="flex flex-col gap-3 text-white font-semibold h-full">
        <NavLink
          to="escuelas"
          className={({ isActive }) =>
            `p-2 rounded-md flex justify-between items-center group ${
              isActive ? "bg-palette-ext" : "bg-palette-second"
            }`
          }
        >
          Escuelas
          <MdArrowRight className="hidden text-xl group-hover:inline-block" />
        </NavLink>
        <NavLink
          to="productos"
          className={({ isActive }) =>
            `p-2 rounded-md flex justify-between items-center group ${
              isActive ? "bg-palette-ext" : "bg-palette-second"
            }`
          }
        >
          Productos
          <MdArrowRight className="hidden text-xl group-hover:inline-block" />
        </NavLink>
        <NavLink
          to="paquetes"
          className={({ isActive }) =>
            `p-2 rounded-md flex justify-between items-center group ${
              isActive ? "bg-palette-ext" : "bg-palette-second"
            }`
          }
        >
          Paquetes
          <MdArrowRight className="hidden text-xl group-hover:inline-block" />
        </NavLink>
        <NavLink
          to="ordenes"
          className={({ isActive }) =>
            `p-2 rounded-md flex justify-between items-center group ${
              isActive ? "bg-palette-ext" : "bg-palette-second"
            }`
          }
        >
          Ordenes
          <MdArrowRight className="hidden text-xl group-hover:inline-block" />
        </NavLink>
        <NavLink
          to="tokens"
          className={({ isActive }) =>
            `p-2 rounded-md flex justify-between items-center group ${
              isActive ? "bg-palette-ext" : "bg-palette-second"
            }`
          }
        >
          Tokens
          <MdArrowRight className="hidden text-xl group-hover:inline-block" />
        </NavLink>
        <NavLink
          to="descuentos"
          className={({ isActive }) =>
            `p-2 rounded-md flex justify-between items-center group ${
              isActive ? "bg-palette-ext" : "bg-palette-second"
            }`
          }
        >
          Descuentos
          <MdArrowRight className="hidden text-xl group-hover:inline-block" />
        </NavLink>
      </nav>
      <div className="bg-palette-second/40 px-2 py-1 rounded-md  grid grid-cols-[max-content_auto] gap-2 items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDIdIEoKmi101JPpAOEpsDz65yTL315CgWly8LwDI&s"
          alt=""
          className="rounded-full w-14 aspect-square"
        />
        <div>
          <h4 className="font-semibold text-palette-ext">John Doe</h4>
          <p className="text-sm font-light text-white">@masterchef</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
