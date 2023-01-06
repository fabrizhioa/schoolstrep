import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import List from "./List";

const Tokens = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/crear" element={<Create />} />
    </Routes>
  );
};

export default Tokens;
