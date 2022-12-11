import React from "react";

const Modal = ({ children, closeAction }) => {
  return (
    <div className="min-h-screen z-50 w-full flex fixed top-0 left-0 bg-black/30 items-center justify-center">
      <div className="p-4 relative bg-white shadow-md shadow-black rounded-md w-11/12 lg:w-1/2 2xl:w-2/6">
        <button type="button" className="absolute top-2 right-2">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
