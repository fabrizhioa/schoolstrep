import React from "react";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-slate-50 shadow-gray-300 shadow-[0_-1px_-2px_0_#d1d5db] z-10  shadow-grey-300 snap-end">
      <div className="flex items-center justify-between max-w-screen-lg w-full mx-auto p-2">
        <img src={Logo} alt="" className="w-40" />
        <span className="font-medium text-sm">© 2022, School Trep</span>
      </div>
    </footer>
  );
};

export default Footer;
