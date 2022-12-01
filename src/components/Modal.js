import React from "react";

const Modal = ({ children, closeAction }) => {
  return (
    <div className="min-h-screen z-50 w-full flex fixed top-0 left-0 bg-black/30 items-center justify-center">
      <div className="p-4 relative bg-white shadow-md shadow-black rounded-md">
        <button type="button" className="absolute top-2 right-2">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
