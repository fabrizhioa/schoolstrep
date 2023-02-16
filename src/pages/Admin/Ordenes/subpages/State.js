import React from "react";
import {
  AiOutlineFieldTime,
  AiOutlineNodeIndex,
  AiOutlineSchedule,
} from "react-icons/ai";
const State = ({ estado }) => {
  const data = [
    {
      title: "En espera",
      leyenda: "Favor de Revisar el Pedido",
      Icono: AiOutlineFieldTime,
    },
    {
      title: "En Proceso",
      leyenda: "El pedido se encuentra en Proceso de Envio",
      Icono: AiOutlineSchedule,
    },
    {
      title: "Enviado",
      leyenda: "El pedido ha sido enviado",
      Icono: AiOutlineNodeIndex,
    },
  ];

  const { Icono, title, leyenda } = data[estado];

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center p-4">
      <Icono className="text-8xl text-palette-ext" />
      <h2 className="text-3xl font-bold text-palette-primary">{title}</h2>
      <p className="text-palette-secondary text-sm font-semibold">{leyenda}</p>
    </div>
  );
};

export default State;
