import React, { useState } from "react";
import Modal from "./Modal";

function ModalForm({
  selectCollage = false,
  setSelectCollage = false,
  setVerModal,
}) {
  const [estudiantes, setEstudiantes] = useState([{ nombre: "", grado: "" }]);
  return (
    <Modal
      closeAction={() => {
        setSelectCollage && setSelectCollage("");
        setVerModal(false);
      }}
      title="Ingresar a la tienda"
    >
      <form
        action="/shop"
        className="grid  p-4 auto-rows-auto gap-1 overflow bg-white"
        onSubmit={(e) => {
          sessionStorage.setItem("estudiantes", JSON.stringify(estudiantes));

          let url = "";
          let grados = "";
          let token = e.target.tkn.value;
          let colegios = e.target.colegios.value;

          estudiantes.forEach((estudiante, index) => {
            grados += estudiante.grado;
            if (estudiantes.length > index + 1) {
              grados += "_";
            }
          });

          url = `/shop?colegios=${colegios}&tkn=${token}&grados=${grados}`;

          window.location = url;
        }}
      >
        <div>
          <span className="w-full py-1 block font-medium">Colegio</span>
          {selectCollage && <p>{selectCollage}</p>}
          <select
            className="border-[1px] rounded-md outline-none p-1 w-full focus:border-palette-ext hover:border-palette-second"
            name="colegios"
            defaultValue={selectCollage}
            hidden={selectCollage}
          >
            <option>Seleccionar...</option>
            <option value="colegio-cervantes">Colegio Cervantes</option>
            <option value="colegio-de-ciencias">Colegio de Ciencias</option>
            <option value="colegio-monte-verde">Colegio Monte Verde</option>
            <option value="colegio-del-valle">Colegio del Valle</option>
          </select>
        </div>
        <div>
          <span className="w-full py-1 block font-medium">Token</span>
          <input
            type="text"
            className="border-[1px] rounded-md outline-none p-1 w-full focus:border-palette-ext hover:border-palette-second"
            name="tkn"
          />
        </div>

        <div>
          <span className="w-full py-1 block font-medium ">
            Cantidad de estudiantes:{" "}
            <select
              onChange={({ target: { value } }) => {
                let newArray = [];

                for (let i = 1; i <= value; i++) {
                  newArray.push({
                    nombre: "",
                    grado: "",
                  });
                }
                setEstudiantes(newArray);
              }}
              defaultValue="1"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </span>
        </div>
        <div className="grid gap-2">
          {estudiantes.map((estudiante, key) => {
            return (
              <div key={key} className={"grid gap-2 grid-cols-2"}>
                <div>
                  <span className="w-full py-1 block font-medium ">
                    Nombre completo del estudiante º{key + 1}
                  </span>
                  <input
                    type="text"
                    className="border-[1px] rounded-md outline-none p-1 w-full focus:border-palette-ext hover:border-palette-second"
                    onChange={({ target: { value } }) => {
                      let arr = estudiantes;
                      arr[key] = {
                        ...arr[key],
                        nombre: value,
                      };
                      setEstudiantes(arr);
                    }}
                  />
                </div>
                <div>
                  <span className="w-full py-1 block font-medium ">
                    Nombre completo del estudiante º{key + 1}
                  </span>
                  <input
                    type="text"
                    className="border-[1px] rounded-md outline-none p-1 w-full focus:border-palette-ext hover:border-palette-second"
                    onChange={({ target: { value } }) => {
                      let arr = estudiantes;
                      arr[key] = {
                        ...arr[key],
                        nombre: value,
                      };
                      setEstudiantes(arr);
                    }}
                  />
                </div>
                <div className=" col-span-full">
                  <span className="w-full py-1 block font-medium">
                    Grado del estudiante º{key + 1}
                  </span>
                  <select
                    className="p-1 w-full  border-[1px] rounded-md focus:border-palette-ext hover:border-palette-second  cursor-pointer"
                    onChange={({ target: { value } }) => {
                      let arr = estudiantes;
                      arr[key] = {
                        ...arr[key],
                        grado: value,
                      };
                      setEstudiantes(arr);
                    }}
                    defaultValue=""
                  >
                    <option value="">Seleccionar</option>
                    <option value="1ro">1 º</option>
                    <option value="2ro">2 º</option>
                    <option value="3ro">3 º</option>
                    <option value="4to">4 º</option>
                    <option value="5to">5 º</option>
                    <option value="6to">6 º</option>
                    <option value="7mo">7 º</option>
                    <option value="8vo">8 º</option>
                    <option value="9no">9 º</option>
                    <option value="10mo">10 º</option>
                    <option value="11vo">11 º</option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>

        <button className="w-full bg-palette-ext font-semibold shadow-sm text-white px-4 py-2 rounded-md mt-3 block">
          Ir a la tienda
        </button>
      </form>
    </Modal>
  );
}

export default ModalForm;
