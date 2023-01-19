import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "./List";
import Ver from "./Ver";

const Ordenes = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/ver/:id/*" element={<Ver />} />
    </Routes>
  );
};

export default Ordenes;

// ID, Email, Fecha, Total, Pagado, Con ordenamiento por columna. Entregado.
