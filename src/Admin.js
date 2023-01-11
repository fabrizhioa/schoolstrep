import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/Admin/SideBar";
import Dashboard from "./pages/Admin/Dashboard";
import Descuentos from "./pages/Admin/Descuentos";
import Escuelas from "./pages/Admin/Escuelas";
import Ordenes from "./pages/Admin/Ordenes";
import Paquetes from "./pages/Admin/Paquetes";
import Productos from "./pages/Admin/Productos";
import Tokens from "./pages/Admin/Tokens";

const Admin = () => {
  return (
    <div className="min-w-full min-h-screen">
      <div className="grid grid-cols-[max-content,auto] min-h-screen ">
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/escuelas/*" element={<Escuelas />} />
          <Route path="/paquetes/*" element={<Paquetes />} />
          <Route path="/tokens/*" element={<Tokens />} />
          <Route path="/productos/*" element={<Productos />} />
          <Route path="/ordenes" element={<Ordenes />} />
          <Route path="/descuentos" element={<Descuentos />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
