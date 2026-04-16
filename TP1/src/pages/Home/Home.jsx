import { useState } from "react";
import Formulario from "../../Components/Formulario/Formulario.jsx";
import Titulo from "../../Components/Titulo/Titulo.jsx";
import Filtro from "../../Components/Filtro/Filtro.jsx";
import styles from "./Home.module.css";
import PeliculasNoVistas from "../../Components/PeliculasNoVistas/PeliculasNoVistas.jsx";
import BarraBusqueda from "../../Components/BarraBusqueda/BarraBusqueda.jsx";
import ResumenGeneros from "../../ResumenGeneros/ResumenGeneros.jsx";
const Home = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [filtro, setFiltro] = useState("todas");
  const [busqueda, setBusqueda] = useState("");
  const conseguirPelis = () => {
    const peliculaStorage = JSON.parse(localStorage.getItem("peliculas"));
    return peliculaStorage || [];
  };

  const pelisTotal = conseguirPelis();
  return (
    <div className={styles.homeContainer}>
      <Titulo texto="Mi gestor de peliculas y series" />
      <Filtro filtroActual={"todas"} setFiltroActual={""} />
      <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />

      <ResumenGeneros peliculas={pelisTotal} />

      <main className={styles.contenedorPrincipal}>
        <PeliculasNoVistas
          filtroBusqueda={busqueda}
          datosPeliculas={pelisTotal}
        />
      </main>

      <button
        className={styles.agregarPelicula}
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? "×" : "+"}
      </button>
      {mostrarFormulario && (
        <Formulario alCerrar={() => setMostrarFormulario(false)} />
      )}
    </div>
  );
};

export default Home;
