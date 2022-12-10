import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import StringToUrl from "../adapters/StringToUrl";

const SelectOrder = ({ handleFilter }) => {
  const [viewButton, setViewButton] = useState(false);
  return (
    <div className="grid auto-row-max relative p-2 w-auto">
      <button
        type="button"
        onClick={() => setViewButton(!viewButton)}
        className="border-2 rounded-md p-2 flex items-center justify-center text-sm font-bold hover:bg-white"
      >
        Orden{" "}
        <MdKeyboardArrowDown
          className={"transition-all " + (viewButton && "rotate-180")}
        />
      </button>
      {viewButton && (
        <div className="grid w-max auto-row-max justify-end absolute top-full bg-white right-2 shadow-md shadow-black/40 rounded-md z-40">
          {[
            "Default",
            "Most Popular",
            "Best Rating",
            "Newest",
            "Low to High",
            "High to Low",
          ].map((value) => (
            <button
              className="block w-auto p-2 hover:bg-palette-primary rounded-md hover:text-white"
              onClick={() =>
                handleFilter("orden", StringToUrl(value), "unique")
              }
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectOrder;
