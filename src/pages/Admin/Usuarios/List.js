import React, { useState } from "react";
import { Input } from "../../../components/Admin/Inputs";
import Modal from "../../../components/Modal";

const List = () => {
  const [modal, setModal] = useState(false);
  const FalseData = [
    {
      nombre: "Joe Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDIdIEoKmi101JPpAOEpsDz65yTL315CgWly8LwDI&s",
      correo: "joe@doe.com",
      tipo: "admin",
      estado: "activo",
    },
  ];

  return (
    <>
      {modal && (
        <Modal
          title={"Agregar nuevo usuario"}
          closeAction={() => setModal(false)}
        >
          <form className="bg-white p-2 grid grid-cols-2 gap-3">
            <Input title="Nombre" name="firstnameUser" />
            <Input title="Apellido" name="lastnameUser" />
            <Input title="Correo" name="emailUser" />
            <Input title="Clave" name="passwordUser" type="password" />
            <div className="col-span-full text-center p-2">
              <button className="text-lg font-bold p-2 px-4 rounded-md bg-palette-ext hover:text-white">
                Crear
              </button>
            </div>
          </form>
        </Modal>
      )}
      <div className="flex flex-col gap-3 p-4 w-full h-full bg-slate-100">
        <div className="items-center flex justify-between gap-3">
          <h3 className="text-palette-primary font-bold text-xl p-2">
            Usuarios
          </h3>
          <button
            className="p-2 px-4 rounded-md bg-palette-primary hover:bg-palette-ext shadow text-white font-bold active:shadow-none"
            onClick={() => setModal(true)}
          >
            Crear nuevo
          </button>
        </div>

        <table className="rounded-md overflow-hidden shadow">
          <thead>
            <tr className="border-b-2 bg-slate-200 p-1 rounded-md">
              <th className="py-1">Imagen</th>
              <th className="py-1">Nombre</th>
              <th className="py-1">Correo</th>
              <th className="py-1">Tipo</th>
              <th className="py-1">Estado</th>
              <th className="py-1">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {FalseData.map((u, key) => (
              <tr
                key={key}
                className="border-b-2 last:border-0 text-center bg-slate-50 place-items-center "
              >
                <td className="p-1">
                  <img
                    src={u.img}
                    alt={u.nombre}
                    className="rounded-full w-14 aspect-square mx-auto"
                  />
                </td>
                <td className="p-1">{u.nombre}</td>
                <td className="p-1">{u.correo}</td>
                <td className="p-1 capitalize">{u.tipo}</td>
                <td className={"p-1 capitalize "}>
                  <p
                    className={`py-1 px-2 rounded-full w-max mx-auto font-bold text-sm ${
                      u.estado === "activo"
                        ? "text-green-900 bg-green-600"
                        : "text-red-900 bg-red-600"
                    }`}
                  >
                    {u.estado}
                  </p>
                </td>
                <td className="p-1 ">
                  <div className="flex flex-col items-center m-auto justify-center  h-full">
                    <button className="text-sm font-semibold text-palette-ext">
                      Modificar
                    </button>
                    <button className="text-sm font-semibold text-red-500">
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;

// <select
// defaultValue={u.tipo}
// className="rounded-full text-slate-300 focus:text-palette-primary font-medium mx-auto text-center p-1 px-2 border-2 text-sm"
// >
// <option value="admin">Admin</option>
// <option value="subadmin">SubAdmin</option>
// </select>

{
  /* <select
defaultValue={u.estado}
className="rounded-full text-slate-300 focus:text-palette-primary font-medium mx-auto text-center p-1 px-2 border-2 text-sm"
>
<option value="inactivo">Deshabilitado</option>
<option value="activo">Habilitado</option>
</select> */
}
