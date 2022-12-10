import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const Counter = ({ name, def = 1, max, className = "" }) => {
  const [value, setValue] = useState(def);
  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-palette-primary hover:bg-palette-second text-white p-3  rounded-md w-max mx-auto font-medium"
        onClick={() => value - 1 >= def && setValue(value - 1)}
      >
        <MdRemove />
      </button>
      <input
        type="number"
        name={name}
        value={value}
        className="block p-2 outline-2  text-center w-14 bg-transparent"
        readOnly
      />
      <button
        className="bg-palette-primary hover:bg-palette-second text-white p-3 rounded-md w-max mx-auto font-medium"
        onClick={() => value + 1 <= max && setValue(value + 1)}
      >
        <MdAdd />
      </button>
    </div>
  );
};

export default Counter;
