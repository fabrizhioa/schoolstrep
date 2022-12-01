import React, { useState } from "react";

const Counter = ({ name, def = 0 }) => {
  const [value, setValue] = useState(def);
  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-palette-green text-white p-2 px-4 rounded-md"
        onClick={() => setValue(value - 1)}
      >
        -
      </button>
      <input
        type="number"
        name={name}
        value={value}
        className=" p-2 inline-block outline-2 w-20 text-center"
        readOnly
      />
      <button
        className="bg-palette-green text-white p-2 px-4 rounded-md "
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
