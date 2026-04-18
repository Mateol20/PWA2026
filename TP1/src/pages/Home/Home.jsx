import { useState, useEffect } from "react";
import Formulario from "../../Components/Formulario/Formulario.jsx";
import Titulo from "../../Components/Titulo/Titulo.jsx";
import Filtro from "../../Components/Filtro/Filtro.jsx";
import styles from "./Home.module.css";
import ListaPeliculas from "../../Components/PeliculasNoVistas/ListaPeliculas.jsx";
import BarraBusqueda from "../../Components/BarraBusqueda/BarraBusqueda.jsx";
import ResumenGeneros from "../../ResumenGeneros/ResumenGeneros.jsx";
import FiltroGeneros from "../../Components/FiltroGeneros/FiltroGeneros.jsx";
import { datosTest } from "../../test/test.js";

const Home = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [filtro, setFiltro] = useState("todas");
  const [busqueda, setBusqueda] = useState("");
  const [pelisTotal, setPelisTotal] = useState([]);
  const [update, setUpdate] = useState(0);
  const [generoFiltro, setGeneroFiltro] = useState("Todos");

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        // Traemos los animes populares
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        const json = await response.json();

        // Jikan devuelve los datos en la propiedad 'data'
        setPelisTotal(json.data);
      } catch (error) {
        console.error("Error cargando animes:", error);
      }
    };

    fetchAnimes();
  }, []); // Se ejecuta una vez al montar el componente

  const marcarComoVista = (titulo) => {
    const pelis = JSON.parse(localStorage.getItem("peliculas")) || [];
    const nuevasPelis = pelis.map((peli) => {
      if (peli.titulo === titulo) {
        return { ...peli, vista: true };
      }
      return peli;
    });

    localStorage.setItem("peliculas", JSON.stringify(nuevasPelis));
    setUpdate((prev) => prev + 1);
  };

  return (
    <div className={styles.homeContainer}>
      <Titulo texto="Mi gestor de peliculas y series" />

      <Filtro filtroActual={filtro} setFiltroActual={setFiltro} />

      <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />

      <ResumenGeneros peliculas={pelisTotal} />
      <FiltroGeneros
        generoSeleccionado={generoFiltro}
        setGeneroActual={setGeneroFiltro}
        peliculas={pelisTotal}
      />
      <main className={styles.contenedorPrincipal}>
        <ListaPeliculas
          filtroBusqueda={busqueda}
          datosPeliculas={pelisTotal}
          filtroEstado={filtro}
          filtroGenero={generoFiltro}
          onMarcarVista={marcarComoVista}
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
