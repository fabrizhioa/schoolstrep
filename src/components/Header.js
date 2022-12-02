import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { MdClose, MdSearch, MdShoppingCart } from "react-icons/md";
const Header = () => {
  const [search, viewSearch] = useState(false);
  return (
    <header className="p-4 shadow-sm shadow-grey-300 bg-slate-50 fixed h-20 grid items-center text-palette-blue w-full top-0 left-0 z-10">
      {search ? (
        <div className="flex w-full max-w-screen-xl  mx-auto justify-center">
          <div className="flex items-center w-3/5 border-[1px]  rounded-md px-2 py-2 border-palette-white ">
            <input
              type="text"
              placeholder="search"
              className=" outline-none w-full bg-transparent  border-0 placeholder:text-slate-50"
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
          <img src={Logo} alt="" className="w-32" />
          <nav className="flex gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 px-1 text-center border-b-2 border-b-palette-green outline-none"
                  : "pb-1 px-1 text-center border-b-2 border-transparent outline-none hover:border-b-palette-yellow"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 px-1 text-center border-b-2 border-b-palette-green outline-none"
                  : "pb-1 px-1 text-center border-b-2 border-transparent outline-none hover:border-b-palette-yellow"
              }
            >
              Nosotros
            </NavLink>
          </nav>
          <div className="flex gap-3 text-2xl">
            <button
              type="button"
              className=" hover:text-palette-green active:text-palette-yellow"
              onClick={() => viewSearch(true)}
            >
              <MdSearch />
            </button>

            <Link
              to="/cart"
              className=" hover:text-palette-green active:text-palette-yellow"
            >
              <MdShoppingCart />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
