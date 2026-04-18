import styles from "./FiltroGeneros.module.css";

const FiltroGeneros = ({ generoActual, setGeneroActual, peliculas }) => {
  // 1. Extraemos todos los nombres de géneros de la estructura de la API
  // Jikan usa: anime.genres -> [ {name: "Action"}, {name: "Sci-Fi"} ]
  const todosLosGeneros = peliculas.flatMap((p) =>
    p.genres ? p.genres.map((g) => g.name) : [],
  );

  // 2. Quitamos duplicados y agregamos "Todos"
  const generosUnicos = ["Todos", ...new Set(todosLosGeneros)];

  return (
    <div className={styles.contenedorFiltros}>
      {generosUnicos.map((gen) => (
        <button
          // Ahora 'gen' será una cadena de texto real (ej: "Action"), funcionando como una key única
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
