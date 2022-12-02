import React, { useState } from "react";

const Counter = ({ name, def = 0 }) => {
  const [value, setValue] = useState(def);
  return (
    <div className="grid grid-cols-3 items-center justify-center">
      <button
        className="bg-palette-green text-white p-2 px-4 rounded-md w-max mx-auto"
        onClick={() => setValue(value - 1)}
      >
        -
      </button>
      <input
        type="number"
        name={name}
        value={value}
        className=" p-2 outline-2  text-center "
        readOnly
      />
      <button
        className="bg-palette-green text-white p-2 px-4 rounded-md w-max mx-auto"
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
