import React from "react";
import Empty from "../../../components/Admin/Empty";
import { Colegios } from "../../../fakedata";

const List = () => {
  const empty = true;
  console.log(Colegios);
  return empty ? (
    <Empty
      text="No hay tokens"
      image="/assets/token_empty.svg"
      link={{ text: "Agregar nuevo token", url: "crear" }}
    />
  ) : (
    <div>List of Escuelas</div>
  );
};

export default List;
