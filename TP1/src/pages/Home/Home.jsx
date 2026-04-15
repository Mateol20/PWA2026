import { useState } from "react";
import Formulario from "../../Components/Formulario/Formulario.jsx";
import Titulo from "../../Components/Titulo/Titulo.jsx";
import Filtro from "../../Components/Filtro/Filtro.jsx";
import styles from "./Home.module.css";
import { PeliculasNoVistas } from "../../Components/PeliculasNoVistas/PeliculasNoVistas.jsx";
const Home = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [filtro, setFiltro] = useState("todas");

  return (
    <div className={styles.homeContainer}> {/* Un contenedor padre para controlar el flujo */}
      <section>
        <Titulo texto="Mi gestor de peliculas y series" />
        <Filtro filtroActual={filtro} setFiltroActual={setFiltro} />
      </section>

      {/* El formulario aparece arriba o abajo, pero NO debe tener position: fixed */}
      {mostrarFormulario && (
        <Formulario alCerrar={() => setMostrarFormulario(false)} />
      )}

   <main className={styles.contenedorPrincipal}>
  <PeliculasNoVistas />
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
