import styles from "./FiltroGeneros.module.css";
const FiltroGeneros = ({ generoActual, setGeneroActual, peliculas }) => {
  const generosUnicos = ["Todos", ...new Set(peliculas.map((p) => p.genero))];

  return (
    <div className={styles.contenedorFiltros}>
      {generosUnicos.map((gen) => (
        <button
          key={gen}
          className={`${styles.pill} ${generoActual === gen ? styles.activa : ""}`}
          onClick={() => setGeneroActual(gen)}
        >
          {gen}
        </button>
      ))}
    </div>
  );
};

export default FiltroGeneros;
