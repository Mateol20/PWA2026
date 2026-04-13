// src/components/Filtros.jsx
import "./Filtro.css";

const Filtro = ({ filtroActual, setFiltroActual }) => {
  return (
    <div className="grupo-botones">
      <button
        className={
          filtroActual === "todas" ? "btn-filtro activo" : "btn-filtro"
        }
        onClick={() => setFiltroActual("todas")}
      >
        Todas
      </button>

      <button
        className={
          filtroActual === "vistas" ? "btn-filtro activo" : "btn-filtro"
        }
        onClick={() => setFiltroActual("vistas")}
      >
        Vistas
      </button>

      <button
        className={
          filtroActual === "pendientes" ? "btn-filtro activo" : "btn-filtro"
        }
        onClick={() => setFiltroActual("pendientes")}
      >
        No Vistas
      </button>
    </div>
  );
};

export default Filtro;
