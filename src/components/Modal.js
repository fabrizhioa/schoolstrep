import React from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ children, closeAction, title }) => {
  return (
    <div className="h-screen z-50 w-full flex fixed top-0 left-0 bg-black/30 items-center justify-center">
      <div className="relative shadow  rounded-md max-h-[80vh]  grid grid-rows-[max-content,minmax(0,1fr)] overflow-hidden w-1/2">
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
        <div className="overflow-y-auto h-full bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
