import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { MdClose, MdSearch, MdShoppingCart } from "react-icons/md";
const Header = ({ openCartAction }) => {
  const [search, viewSearch] = useState(false);
  return (
    <header className="p-4 shadow-sm shadow-grey-300 bg-slate-50 sticky h-20 grid items-center text-palette-second w-full top-0 left-0 z-10">
      {search ? (
        <div className="flex w-full max-w-screen-xl  mx-auto justify-center">
          <div className="flex items-center w-3/5 border-[1px]  rounded-md px-2 py-2 bg-palette-white ">
            <input
              type="text"
              placeholder="search"
              className=" outline-none w-full bg-transparent  border-0 placeholder:text-palette-primary"
            />
            <button type="button" className="text-xl outline-none">
              <MdSearch />
            </button>
          </div>
          <button
            type="button"
            className="text-xl p-2 outline-none"
            onClick={() => viewSearch(false)}
          >
            <MdClose />
          </button>
        </div>
      ) : (
        <div className=" flex justify-between items-center max-w-screen-xl mx-auto w-full">
          <Link replace={true} to="/">
            <img src={Logo} alt="" className="w-32" />
          </Link>
          <nav className="flex gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 px-1 text-center border-b-2 border-b-palette-primary outline-none sm:text-sm"
                  : "pb-1 px-1 text-center border-b-2 border-transparent outline-none hover:border-b-palette-ext sm:text-sm"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 px-1 text-center border-b-2 border-b-palette-primary outline-none sm:text-sm"
                  : "pb-1 px-1 text-center border-b-2 border-transparent outline-none hover:border-b-palette-ext sm:text-sm"
              }
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 px-1 text-center border-b-2 border-b-palette-primary outline-none sm:text-sm md:text-base"
                  : "pb-1 px-1 text-center border-b-2 border-transparent outline-none hover:border-b-palette-ext sm:text-sm md:text-base"
              }
            >
              Contacto
            </NavLink>
          </nav>
          <div className="flex gap-3 text-2xl">
            <button
              type="button"
              className=" hover:text-palette-primary active:text-palette-ext"
              onClick={() => viewSearch(true)}
            >
              <MdSearch />
            </button>

            <button
              type="button"
              className=" hover:text-palette-primary active:text-palette-ext"
              onClick={() => openCartAction()}
            >
              <MdShoppingCart />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
