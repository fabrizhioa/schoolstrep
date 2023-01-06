import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdMail, MdPhone } from "react-icons/md";
import Input from "../components/Forms/Input";

export const Contacto = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex gap-2 bg-gradient-to-t from-slate-50 to-blue-50">
      <div className="grid w-full gap-4 p-2 max-w-screen-xl mx-auto h-max ">
        <div className="col-span-full text-center p-2">
          <p className="text-lg font-bold text-palette-ext">
            Tus problemas son nuestros
          </p>
          <h2 className="text-3xl  font-bold text-palette-primary ">
            Contacta con nosotros
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3 p-2 w-max mx-auto">
          <a
            href="tel:+584121075052"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-5 border-2 rounded-md flex items-center justify-center bg-slate-50 text-gray-500 text-2xl hover:bg-palette-primary hover:border-transparent  hover:text-palette-white"
          >
            <MdPhone />
          </a>
          <a
            href="mailto:correo@correo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-5 border-2 rounded-md flex items-center justify-center bg-slate-50 text-gray-500 text-2xl hover:bg-palette-ext hover:border-transparent  hover:text-palette-white"
          >
            <MdMail />
          </a>
          <a
            href="http://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-5 border-2 rounded-md flex items-center justify-center bg-slate-50 text-gray-500 text-2xl hover:bg-palette-primary hover:border-transparent  hover:text-palette-white"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div>
          <form className="flex gap-2 flex-col w-3/5 mx-auto">
            <Input
              name="contactName"
              title="Nombre completo:"
              placeholder="Joe Doe"
            />
            <Input
              name="contactEmail"
              title="Correo:"
              placeholder="joe@doe.com"
              type="email"
            />
            <Input
              name="contactPhone"
              title="Teléfono:"
              placeholder="+57 5124 51124"
              type="tel"
            />
            <div className={"flex flex-col w-full"}>
              <span className={" w-max text-sm font-bold text-palette-ext"}>
                Causa del contacto:
              </span>
              <select
                name="contactCause"
                className="p-2 border-2 rounded-md outline-none bg-slate-50"
              >
                <option value="C1">Quiero cancelar mi compra</option>
                <option value="C2">Quiero cambiar mi metodo de pago</option>
                <option value="C3">Quiero dar seguimiento a mi paquete</option>
                <option value="C4">
                  Quiero realizar un cambio en la compra
                </option>
              </select>
            </div>
            <div className={"flex flex-col w-full"}>
              <span className={" w-max text-sm font-bold text-palette-ext"}>
                Causa del contacto:
              </span>
              <textarea
                name="contactMessage "
                className="resize-none border-2 p-2 rounded-md outline-none bg-slate-50"
                rows={3}
              ></textarea>
            </div>
            <button className="p-2 rounded-md bg-palette-ext drop-shadow-sm active:drop-shadow-none uppercase font-semibold hover:bg-palette-primary hover:text-white">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
