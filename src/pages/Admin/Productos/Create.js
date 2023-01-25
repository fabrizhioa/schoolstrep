import React from "react";
import { InputFile, Input, CheckBox } from "../../../components/Admin/Inputs";

const Create = () => {
  return (
    <div className="bg-slate-50 p-4">
      <h2 className="text-xl font-bold text-palette-primary">
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
          <Input title="Codigo SKU-TREP" name="sku_trep" required={true} />
          <Input title="Codigo EAN-UPC" name="ean_upc" required={true} />

          <CheckBox
            title="Incluir impuestos"
            name="impuesto"
            value={true}
            checked={true}
          />
          <CheckBox
            title="Vender sin inventario"
            name="inventarioVacio"
            value={true}
          />

          <CheckBox title="Forrado de libro" name="forrado" value={true} />
        </div>

        <InputFile name="product_image" title="Imagen del producto" />
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
