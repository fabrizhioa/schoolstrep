import React from "react";
import { InputImage, Input } from "../../../components/Admin/Inputs";

const Create = () => {
  return (
    <div className="bg-slate-50 p-4">
      <h2 className="text-2xl font-bold text-palette-primary">
        Agregar Producto
      </h2>
      <form
        className="grid  gap-2 md:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.table(e.target);
        }}
      >
        <div className="flex flex-col gap-3">
          <Input
            title="Nombre"
            name="product_name"
            type="text"
            required={true}
          />
          <Input
            title="Modelo"
            name="product_model"
            type="text"
            required={true}
          />
          <Input
            title="Marca"
            name="product_mark"
            type="text"
            required={true}
          />
          <Input
            title="Categoria"
            name="product_category"
            type="text"
            required={true}
          />
          <Input
            title="Precio"
            name="product_price"
            type="number"
            required={true}
          />
          <Input
            title="Descuento(porcentaje)"
            name="product_discount"
            type="number"
            required={true}
          />
          <Input
            title="Cantidad en stock"
            name="product_stock"
            type="number"
            required={true}
          />
        </div>

        <InputImage name="product_image" />
        <div className="text-center col-span-full">
          <button className="text-lg font-bold p-2 px-4 rounded-md bg-palette-ext hover:text-white">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
