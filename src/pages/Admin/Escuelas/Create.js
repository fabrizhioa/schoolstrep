import React from "react";
import {
  CheckBox,
  HiddenBox,
  Input,
  InputFile,
} from "../../../components/Admin/Inputs";

const Create = () => {
  return (
    <div className="bg-slate-50 p-4">
      <h2 className="text-2xl font-bold text-palette-primary">Crear Escuela</h2>
      <form
        className="grid  gap-2 md:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.table(e.target);
        }}
      >
        <div className="flex flex-col gap-3">
          <Input title="Id" name="school_id" type="text" required={true} />
          <Input
            title="Nombre"
            name="school_name"
            type="text"
            required={true}
          />
          <Input
            title="Email"
            name="school_email"
            type="email"
            required={true}
          />
          <Input
            title="Telefono"
            name="school_phone"
            type="tel"
            required={true}
          />
          <Input
            title="Celular"
            name="school_cell"
            type="tel"
            required={true}
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              title="Calle"
              name="school_address_street"
              type="text"
              required={true}
            />
            <Input
              title="Colonia"
              name="school_address_colony"
              type="text"
              required={true}
            />
            <Input
              title="Numero"
              name="school_address_number"
              type="text"
              required={true}
            />
            <Input
              title="Ciudad"
              name="school_address_city"
              type="text"
              required={true}
            />
            <Input
              title="Estado"
              name="school_address_state"
              type="text"
              required={true}
            />
            <Input
              title="Codigo"
              name="school_address_code"
              type="text"
              required={true}
            />
          </div>

          <Input title="RFC" name="school_rfc" type="text" required={true} />
          <div className="grid grid-cols-2 gap-3">
            <Input
              title="Nombre del Encargado"
              name="school_encargado"
              type="text"
              required={true}
            />
            <Input
              title="Telefono del Encargado"
              name="school_encargado_cell"
              type="text"
              required={true}
            />
          </div>

          <HiddenBox title="Entrega en escuela" name="school_delivery">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(max-content,1fr))] gap-2">
              <span className="font-medium col-span-full">
                Dias de entrega:
              </span>
              <div className="flex flex-wrap gap-2">
                <CheckBox title="Lunes" name="delivery_days[]" value="lun" />
                <CheckBox title="Martes" name="delivery_days[]" value="mar" />
                <CheckBox
                  title="Miercoles"
                  name="delivery_days[]"
                  value="mier"
                />
                <CheckBox title="Jueves" name="delivery_days[]" value="jue" />
                <CheckBox title="Viernes" name="delivery_days[]" value="vie" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <span className="col-span-2 font-medium">Horas de entrega:</span>
              <Input title="Inicio" name="delivery_start" type="time" />
              <Input title="Fin" name="delivery_end" type="time" />
            </div>
          </HiddenBox>
        </div>

        <InputFile name="school_image" title="Logo de la escuela" />
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
