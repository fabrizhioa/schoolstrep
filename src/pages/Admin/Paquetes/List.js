import React from "react";
import Empty from "../../../components/Admin/Empty";

const List = () => {
  const empty = true;
  return empty ? (
    <Empty
      text="No hay paquetes"
      image="/assets/package_empty.svg"
      link={{ text: "Agregar nuevo paquete", url: "crear" }}
    />
  ) : (
    <div>List of Escuelas</div>
  );
};

export default List;
