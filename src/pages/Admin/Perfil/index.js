import React, { useRef, useState } from "react";

const Perfil = () => {
  const [edit, setActiveEdit] = useState(false);
  const profileImage = useRef();
  const profileInputImage = useRef();
  const fakeData = {
    id: "123",
    nombre: "John",
    apellido: "Doe",
    correo: "joe@doe.com",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDIdIEoKmi101JPpAOEpsDz65yTL315CgWly8LwDI&s",
  };
  return (
    <div className="flex flex-col gap-3 p-4 w-full h-full bg-slate-100">
      <form className="grid md:grid-cols-[max-content,auto] gap-3 p-2 mx-auto container">
        <div className="relative flex items-center justify-center h-max group">
          <img
            src={fakeData.img}
            alt={"user" + fakeData.id}
            ref={profileImage}
            className="aspect-square w-64 border-2 shadow rounded-full mx-auto"
          />
          <input
            type="file"
            hidden
            name="profileImage"
            ref={profileInputImage}
            onChange={(e) => {
              let url = URL.createObjectURL(e.target.files[0]);
              profileImage.current.src = url;
            }}
          />
          {edit && (
            <button
              className="group-hover:flex hidden absolute w-full h-full aspect-square bg-black/20 top-0 rounded-full items-center justify-center text-white font-bold drop-shadow"
              type="button"
              onClick={() => profileInputImage.current.click()}
            >
              Subir nueva imagen
            </button>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <div
            className={
              "flex flex-col border-2 rounded-lg bg-white overflow-hidden " +
              (edit && "border-slate-500")
            }
          >
            <span
              className={
                "p-2 font-medium border-b-2 " + (edit && "border-slate-500")
              }
            >
              Nombre:
            </span>
            <input
              type="text"
              defaultValue={fakeData.nombre}
              className="p-2  outline-none bg-slate-200 disabled:border-none disabled:bg-transparent"
              disabled={!edit}
            />
          </div>
          <div
            className={
              "flex flex-col border-2 rounded-lg bg-white overflow-hidden " +
              (edit && "border-slate-500")
            }
          >
            <span
              className={
                "p-2 font-medium border-b-2 " + (edit && "border-slate-500")
              }
            >
              Apellido:
            </span>
            <input
              type="text"
              defaultValue={fakeData.apellido}
              className="p-2  outline-none bg-slate-200 disabled:border-none disabled:bg-transparent"
              disabled={!edit}
            />
          </div>
          <div
            className={
              "flex flex-col border-2  rounded-md bg-white overflow-hidden " +
              (edit && "border-slate-500")
            }
          >
            <span
              className={
                "p-2 border-b-2 font-medium " + (edit && "border-slate-500")
              }
            >
              Correo:
            </span>
            <input
              type="email"
              defaultValue={fakeData.correo}
              className="p-2  outline-none bg-slate-200 disabled:border-none disabled:bg-transparent"
              disabled={!edit}
            />
          </div>

          {edit && (
            <>
              <div
                className={
                  "flex flex-col border-2  rounded-md bg-white overflow-hidden " +
                  (edit && "border-slate-500")
                }
              >
                <span
                  className={
                    "p-2 border-b-2 font-medium " + (edit && "border-slate-500")
                  }
                >
                  Nueva clave:
                </span>
                <input
                  type="password"
                  defaultValue={fakeData.correo}
                  className="p-2  outline-none bg-slate-200 disabled:border-none disabled:bg-transparent"
                  disabled={!edit}
                />
              </div>

              <div className="flex flex-col gap-2 col-span-full border-t-2 py-2">
                <span className="p-2 font-medium">Clave de confirmación:</span>
                <input
                  type="email"
                  className="p-2 rounded-md border-2 disabled:border-none disabled:bg-transparent"
                  disabled={!edit}
                />
              </div>

              <div className="text-center col-span-full">
                <button className="text-lg font-bold p-2 px-4 rounded-md bg-palette-ext hover:text-white">
                  Modificar
                </button>
              </div>
            </>
          )}

          {!edit && (
            <div className="col-span-full flex items-center justify-center">
              <button
                className="p-2 px-4 rounded-md bg-palette-primary hover:bg-palette-ext shadow text-white font-bold active:shadow-none"
                type="button"
                onClick={() => setActiveEdit(true)}
              >
                Editar Perfil
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Perfil;
