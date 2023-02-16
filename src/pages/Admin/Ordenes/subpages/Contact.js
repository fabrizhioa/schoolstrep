import React from "react";

const Contact = () => {
  return (
    // Toda esta data es falsa y debe ser tomada de la data principal
    <div className="p-2 flex flex-col gap-2">
      <h4 className=" font-bold text-palette-primary">Contacto:</h4>
      <p className="p-2 border-2 rounded-md">
        Correo:<span> joe@doe.com</span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Telefono:<span> +52 1232 123 123</span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Nombre del Estudiante:<span> Joe Junior</span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Colegio:<span> Colegio Servantes</span>
      </p>
      <p className="p-2 border-2 rounded-md">
        Año:<span> 7mo</span>
      </p>
    </div>
  );
};

export default Contact;
