import React from "react";

const BarraBusqueda = ({ busqueda, setBusqueda }) => {
  return (
    <div className="contenedor-busqueda">
      <input
        type="text"
        placeholder="Buscar pelicula..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
};

export default BarraBusqueda;
