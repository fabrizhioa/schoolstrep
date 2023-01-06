import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
  MdEmail,
  MdHelp,
  MdHome,
  MdMenu,
  MdShoppingCart,
} from "react-icons/md";
import { useState } from "react";
const Header = ({ openCartAction }) => {
  const [mobileMenuView, setMobileMenuView] = useState(false);
  return (
    <header className="p-4 shadow-sm shadow-grey-300 bg-slate-50 sticky h-20 grid items-center text-palette-second w-full top-0 left-0 z-10">
      <div className=" flex justify-between items-center max-w-screen-xl mx-auto w-full relative">
        <Link replace={true} to="/">
          <img src={Logo} alt="" className="w-32" />
        </Link>

        <nav
          className={`fixed md:static md:flex-row md:justify-center md:gap-2 w-full h-max transition-all duration-200 bg-slate-50 shadow-sm md:shadow-none md:px-0 px-2 md:bg-transparent ${
            mobileMenuView ? "top-[calc(5rem-1px)]" : "-top-full"
          } left-0 flex items-center justify flex-col`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `p-2 border-b-2 flex w-full md:w-max justify-between items-center font-semibold ${
                isActive
                  ? "text-palette-primary border-palette-primary"
                  : "text-palette-second md:border-transparent"
              } hover:border-palette-ext`
            }
            onClick={() => setMobileMenuView(false)}
          >
            <span>Home</span>
            <MdHome className="md:hidden text-palette-primary" />
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              `p-2 border-b-2 flex w-full md:w-max justify-between items-center font-semibold ${
                isActive
                  ? "text-palette-primary border-palette-primary"
                  : "text-palette-second md:border-transparent"
              } hover:border-palette-ext`
            }
            onClick={() => setMobileMenuView(false)}
          >
            <span>Nosotros</span>
            <MdHelp className="md:hidden text-palette-primary" />
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `p-2 border-b-2 flex w-full md:w-max justify-between items-center font-semibold border-transparent ${
                isActive
                  ? "text-palette-primary md:border-palette-primary"
                  : "text-palette-second"
              } hover:border-palette-ext`
            }
            onClick={() => setMobileMenuView(false)}
          >
            <span>Contacto</span>
            <MdEmail className="md:hidden text-palette-primary" />
          </NavLink>
        </nav>
        <div className="flex gap-2 text-2xl">
          <button
            className="text-2xl flex items-center justify-center hover:text-palette-primary active:text-palette-ext md:hidden"
            type="button"
            onClick={() => setMobileMenuView(!mobileMenuView)}
          >
            <MdMenu />
          </button>
          <button
            type="button"
            className="p-2 hover:text-palette-primary active:text-palette-ext flex items-center justify-between"
            onClick={() => {
              openCartAction();
              setMobileMenuView(false);
            }}
          >
            <MdShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
