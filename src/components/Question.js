import React, { useState } from "react";

const Question = ({ title, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-2 transition-all bg-slate-50 rounded-sm">
      <div
        onClick={() => setShow(!show)}
        className="font-semibold flex items-center gap-2 cursor-pointer text-palette-blue "
      >
        <span className="text-xl">{show ? "-" : "+"}</span> {title}
      </div>
      {show && (
        <p
          className={
            (!show && "h-0") +
            " border-t-2 border-palette-green transition-all mt-2"
          }
        >
          {children}
        </p>
      )}
    </div>
  );
};

export default Question;
