import React from "react";
import { useState } from "react";
import { Input, InputFile, InputIdBox } from "../../../components/Admin/Inputs";
import Modal from "../../../components/Modal";
import { Articulos } from "../../../fakedata";
import CreateProduct from "../Productos/Create";
const Create = () => {
  const [productCount, setProductCount] = useState([0]);
  const [viewModal, setViewModal] = useState(false);
  return (
    <>
      {viewModal && (
        <Modal title={"Crear Producto"} closeAction={() => setViewModal(false)}>
          <CreateProduct />
        </Modal>
      )}
      <div className="bg-slate-50 p-4">
        <h2 className="text-2xl font-bold text-palette-primary">
          Agregar compra
        </h2>
        <form
          className="grid  gap-2 md:grid-cols-2 auto-rows-max items-start"
          onSubmit={(e) => {
            e.preventDefault();
            console.table(e.target);
          }}
        >
          <div className="flex flex-col gap-3 h-max">
            <Input title="Factura" name="factura" />
            <Input title="Fecha" type="date" name="fecha" />
            <Input title="Costo" type="number" name="costo" />
          </div>
          <InputFile title="PDF" name="pdf" />
          <div className="flex gap-2 items-center col-span-full p-2 border-t-2 flex-wrap justify-between">
            <div className="flex gap-1 flex-wrap">
              <span className="font-medium">Cantidad de productos:</span>
              <select
                name="productos"
                className="px-2 py-1 rounded-md outline-none border-2 border-slate-300"
                value={productCount.length}
                onChange={(e) => {
                  let a = new Array(Number(e.target.value)).fill(0);

                  setProductCount(a);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <button
              className="bg-palette-primary hover:bg-palette-ext font-bold text-white shadow active:shadow-none p-1 px-4 rounded-md"
              onClick={() => setViewModal(true)}
            >
              Crear producto
            </button>
          </div>
          {productCount.map((e, key) => (
            <div
              className="flex flex-col gap-2 bg-white p-2 roudned-lg border-2 rounded-lg"
              key={key}
            >
              <InputIdBox
                data={Articulos}
                fields={["id"]}
                title={"Id del producto #" + (key + 1)}
                name={"idproducto#" + (key + 1)}
              />
              <Input
                title={"Costo producto #" + (key + 1)}
                name={"costoproducto#" + (key + 1)}
              />
              <Input
                title={"Cantidad producto #" + (key + 1)}
                name={"cantidadproducto#" + (key + 1)}
              />
            </div>
          ))}

          <div className="text-center col-span-full order-4">
            <button className="text-lg font-bold p-2 px-4 rounded-md bg-palette-ext hover:text-white">
              Crear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
