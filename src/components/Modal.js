import React from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ children, closeAction, title }) => {
  return (
    <div className="min-h-screen z-50 w-full flex fixed top-0 left-0 bg-black/30 items-center justify-center">
      <div className="relative shadow  rounded-md w-11/12 lg:w-1/2 2xl:w-2/6 max-h-[90%] overflow-hidden">
        <div className="flex w-full p-2 px-4 justify-between items-center bg-palette-primary text-white rounded-t-md">
          <h2 className="font-bold text-xl text-center text-palette-white">
            {title}
          </h2>
          <button
            type="button"
            className=" hover:bg-palette-ext rounded-md transition-all duration-300 hover:text-white p-2 flex items-center"
            onClick={closeAction}
          >
            <MdClose />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
