import { useState } from "react";
import Formulario from "../../Components/Formulario/Formulario.jsx";
import Titulo from "../../Components/Titulo/Titulo.jsx";
import Filtro from "../../Components/Filtro/Filtro.jsx";
import styles from "./Home.module.css";
// import { PeliculasNoVistas } from "../../Components/PeliculasNoVistas/PeliculasNoVistas.jsx";
import { MostrarTarjeta } from "../../Components/MostrarTarjeta/MostrarTarjeta.jsx";
import { PeliculasNoVistas } from "../../Components/PeliculasNoVistas/PeliculasNoVistas.jsx";
const Home = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [filtro, setFiltro] = useState("todas");

  return (
    <>
      {mostrarFormulario && (
        <Formulario alCerrar={() => setMostrarFormulario(false)} />
      )}
      <section>
        <Titulo texto="Mi gestor de peliculas y series" />
        <Filtro filtroActual={filtro} setFiltroActual={setFiltro} />
      </section>
      
      {filtro === "pendientes" && <PeliculasNoVistas/>}
      {/* {filtro === "vistas" && <PeliculasVistas/>} */}
      
      <div>
        <button
          className={styles.agregarPelicula}
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          {mostrarFormulario ? "Cerrar" : "+"}
        </button>

        {/* <button className= {styles.agregarPelicula} > + </button> */}
      </div>
    </>
  );
};

export default Home;
