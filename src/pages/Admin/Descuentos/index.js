import React, { useState } from "react";
import Empty from "../../../components/Admin/Empty";
import Create from "./Create";
import List from "./List";

const Descuentos = () => {
  const empty = false;
  const [viewModal, setViewModal] = useState(false);

  return (
    <div className="relative">
      {viewModal !== false && viewModal === "create" && (
        <div className="absolute w-full h-full bg-palette-second/30 flex items-center justify-center">
          <Create closeAction={() => setViewModal(false)} />
        </div>
      )}
      {empty ? (
        <Empty
          text="No hay tokens"
          image="/assets/discount_empty.svg"
          action={{
            text: "Agregar nuevo token",
            func: () => {
              setViewModal("create");
            },
          }}
        />
      ) : (
        <List
          actionOpenCreateModal={() => {
            setViewModal("create");
          }}
        />
      )}
    </div>
  );
};

export default Descuentos;
