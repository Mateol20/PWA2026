import { useState } from "react";
import Formulario from "../../Components/Formulario/Formulario.jsx";
import Titulo from "../../Components/Titulo/Titulo.jsx";
import Filtro from "../../Components/Filtro/Filtro.jsx";
import styles from "./Home.module.css";
import { PeliculasNoVistas } from "../../Components/PeliculasNoVistas/PeliculasNoVistas.jsx";
import BarraBusqueda from "../../Components/BarraBusqueda/BarraBusqueda.jsx";
const Home = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [filtro, setFiltro] = useState("todas");
  const [busqueda, setBusqueda] = useState("");
  return (
    <div className={styles.homeContainer}>
      <section>
        <Titulo texto="Mi gestor de peliculas y series" />
        <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
        <Filtro filtroActual={filtro} setFiltroActual={setFiltro} />
      </section>

      {mostrarFormulario && (
        <Formulario alCerrar={() => setMostrarFormulario(false)} />
      )}

      <main className={styles.contenedorPrincipal}>
        <PeliculasNoVistas filtroBusqueda={busqueda} />
      </main>

      <button
        className={styles.agregarPelicula}
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? "×" : "+"}
      </button>
    </div>
  );
};

export default Home;
