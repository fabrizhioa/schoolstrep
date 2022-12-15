import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const Question = ({ title, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-2 transition-all bg-slate-200 rounded-sm">
      <div
        onClick={() => setShow(!show)}
        className="font-semibold inline-flex transition-all items-center gap-2 cursor-pointer text-palette-second "
      >
        <span className="text-xl">{show ? <MdRemove /> : <MdAdd />}</span>{" "}
        {title}
      </div>

      <p
        className={
          (!show ? "h-0 border-t-0" : "border-t-2 mt-2") +
          " border-palette-primary transition-all duration-500 overflow-hidden"
        }
      >
        {children}
      </p>
    </div>
  );
};

export default Question;
