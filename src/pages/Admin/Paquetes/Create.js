import React, { useState } from "react";
import {
  InputFile,
  Input,
  InputSelect,
  CheckBox,
} from "../../../components/Admin/Inputs";
import { Colegios, Articulos } from "../../../fakedata";
import StringToUrl from "../../../adapters/StringToUrl";
import ComboBox from "../../../components/ComboBox";
import { MdClose } from "react-icons/md";
import { useEffect } from "react";
const Create = () => {
  const [listArticles, setListArticles] = useState(Articulos);
  const [selectListArticles, setSelectListArticles] = useState([]);

  const FilterArticles = () => {
    let list = Articulos;
    list = Articulos.filter((a) => {
      let result = false;
      selectListArticles.forEach((e) => {
        result = e.id === a.id;
      });

      return !result;
    });
    setListArticles(list);
  };

  useEffect(FilterArticles, [selectListArticles]);

  return (
    <div className="bg-slate-50 p-4">
      <h2 className="text-xl font-bold text-palette-primary">Crear Paquete</h2>
      <form
        className="grid  gap-2 md:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.table(e.target);
        }}
      >
        <div className="flex flex-col gap-3">
          <Input title="Nombre" />
          <InputSelect title="Collages">
            {Colegios.map((colegio) => (
              <option value={StringToUrl(colegio.nombre)}>
                {colegio.nombre}
              </option>
            ))}
          </InputSelect>
          <div className="flex flex-col gap-2">
            <span className={"font-medium col-span-full"}>Grados:</span>
            <div className=" grid grid-cols-3 gap-3 border-2 rounded-md bg-white p-2">
              <CheckBox title="1º grado" name="grados[]" value="1ro" />
              <CheckBox title="2º grado" name="grados[]" value="2do" />
              <CheckBox title="3º grado" name="grados[]" value="3ro" />
              <CheckBox title="4º grado" name="grados[]" value="4to" />
              <CheckBox title="5º grado" name="grados[]" value="5to" />
              <CheckBox title="6º grado" name="grados[]" value="6to" />
              <CheckBox title="7º grado" name="grados[]" value="7mo" />
              <CheckBox title="8º grado" name="grados[]" value="8vo" />
              <CheckBox title="9º grado" name="grados[]" value="9no" />
              <CheckBox title="10º grado" name="grados[]" value="10mo" />
              <CheckBox title="11º grado" name="grados[]" value="11vo" />
            </div>
          </div>

          <CheckBox
            title="Obligatorio"
            name="obligatorio"
            checked={true}
            value="obligatorio"
          />

          <ComboBox
            data={listArticles}
            setAction={(e) => {
              setSelectListArticles([...selectListArticles, e]);
            }}
          />
          <div className="flex flex-col gap-3">
            <span className="font-medium">Lista de articulos:</span>
            <div className="border-2 rounded-md bg-white p-2 flex flex-col gap-3">
              {selectListArticles.length <= 0 && (
                <p>No hay articulos en la lista</p>
              )}
              {selectListArticles.map((element, key) => (
                <button
                  type="button"
                  className="flex border-2 p-1 px-2 rounded-full items-center justify-between text-slate-700 font-bold border-slate-200 group hover:bg-red-300 hover:border-red-500 hover-text-white"
                  onClick={() =>
                    setSelectListArticles(
                      selectListArticles.filter((e, index) => index !== key)
                    )
                  }
                  key={key}
                >
                  <p>
                    {element.nombre.length > 60
                      ? element.nombre.substring(0, 59)
                      : element.nombre}
                  </p>
                  <p className="text-slate-200 group-hover:text-red-500">
                    <MdClose />
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <InputFile />
        <div className="text-center col-span-full p-2">
          <button className="text-lg font-bold p-2 px-4 rounded-md bg-palette-ext hover:text-white">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
