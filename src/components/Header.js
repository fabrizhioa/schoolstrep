import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { MdClose, MdSearch, MdShoppingCart } from "react-icons/md";
const Header = () => {
  const [search, viewSearch] = useState(false);
  return (
    <header className="p-4 bg-palette-white h-20 grid items-center absolute w-full top-0 left-0 z-10">
      {search ? (
        <div className="flex w-full max-w-screen-xl  mx-auto justify-center">
          <div className="flex items-center w-3/5 border-[1px]  rounded-md px-2 py-2 border-palette-blue ">
            <input
              type="text"
              placeholder="search"
              className=" outline-none w-full bg-white border-0"
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
                  ? "underline outline-none"
                  : "hover:underline outline-none"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "underline outline-none"
                  : "hover:underline outline-none"
              }
            >
              Nosotros
            </NavLink>
          </nav>
          <div className="flex gap-3 text-2xl">
            <button
              type="button"
              className="text-palette-blue hover:text-palette-green active:text-palette-yellow"
              onClick={() => viewSearch(true)}
            >
              <MdSearch />
            </button>

            <Link
              to="/cart"
              className="text-palette-blue hover:text-palette-green active:text-palette-yellow"
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
