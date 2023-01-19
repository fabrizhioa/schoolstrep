import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StringToUrl from "../adapters/StringToUrl";

const ComboBox = ({ data, setFilter, setSelect, setAction }) => {
  const [viewData, setViewData] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilter !== undefined && setFilter(search);
    let newData = data;

    if (search.length > 0) {
      newData = newData.filter((element) =>
        element.nombre.toLowerCase().includes(search.toLowerCase())
      );

      setViewData(newData);
    }
  }, [search, data, setFilter]);

  function selectHandle(element) {
    setSelect !== undefined && setSelect(StringToUrl(element.nombre));
    setSearch("");
    setAction(element);
  }

  return [
    <div className="relative w-full">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-full outline-none rounded-md p-2 border-2"
      />
      {search.length > 0 && (
        <div className="absolute z-20 w-full bg-white mt-1 p-2 rounded-md shadow">
          {viewData.map((element, key) => (
            <button
              className="flex items-center gap-2 p-1 hover:bg-palette-ext w-full rounded-md"
              type="button"
              onClick={() => selectHandle(element)}
              key={key}
            >
              <img
                src={element.img}
                alt={element.nombre}
                className="w-5 h-5 "
              />
              <span className="text-xl">{element.nombre}</span>
            </button>
          ))}
        </div>
      )}
    </div>,
  ];
};

export default ComboBox;
