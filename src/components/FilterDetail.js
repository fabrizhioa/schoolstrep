import React from "react";
import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const FilterDetail = ({ title, children }) => {
  const [viewFilter, setViewFilter] = useState(false);
  return (
    <div className=" border-b-2 border-palette-primary my-1 px-2 py-1">
      <div
        onClick={() => setViewFilter(!viewFilter)}
        className="text-lg font-semibold text-palette-primary cursor-pointer flex justify-between transition-all py-1 items-center"
      >
        <h3 className="">{title}</h3>
        {viewFilter ? <MdRemove /> : <MdAdd />}
      </div>
      <div
        className={"transition-all " + (viewFilter ? "h-auto" : " h-0 hidden")}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterDetail;
