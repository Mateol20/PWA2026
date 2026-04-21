import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { getAllMovies } from "../../../services/getAllMovies";

const Home = () => {
  const [todasLasPelis, setTodasLasPelis] = useState([]);
  const [peliculasVisibles, setPeliculasVisibles] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);
  const limitePorPagina = 8;
  useEffect(() => {
    const cargarTodo = async () => {
      setLoading(true);
      const respuesta = await getAllMovies(1, 100);
      setTodasLasPelis(respuesta);
      setPeliculasVisibles(respuesta.slice(0, limitePorPagina));
      setLoading(false);
    };
    cargarTodo();
  }, []);

  const cargarMas = () => {
    const nuevaPagina = pagina + 1;
    const inicio = 0;
    const fin = nuevaPagina * limitePorPagina;

    setPeliculasVisibles(todasLasPelis.slice(inicio, fin));
    setPagina(nuevaPagina);
  };

  return (
    <main>
      <h1>Cartelera</h1>

      {loading && <p>Cargando catálogo...</p>}

      <section className={styles.grid}>
        {peliculasVisibles.map((item) => (
          <article key={item.imdbID}>
            <h2>{item.Title}</h2>
          </article>
        ))}
      </section>

      {peliculasVisibles.length < todasLasPelis.length && (
        <button onClick={cargarMas} className={styles.btnCargar}>
          Cargar más
        </button>
      )}
    </main>
  );
};

export default Home;
