import styles from "./ResumenGeneros.module.css";
const contarPorGenero = (peliculas) => {
  const conteo = {};
  if (!peliculas) return conteo;
  peliculas.forEach((peli) => {
    const genero =
      peli.genero && peli.genero !== "Seleccionar Genero"
        ? peli.genero
        : "Otros";

    conteo[genero] = (conteo[genero] || 0) + 1;
  });
  return conteo;
};
const ResumenGeneros = ({ peliculas }) => {
  const generos = contarPorGenero(peliculas);
  return (
    <div className={styles.contenedorEtiquetas}>
      {Object.entries(generos).map(([genero, cantidad]) => (
        <span key={genero} className={styles.etiqueta}>
          {genero}: <span className={styles.cantidad}>{cantidad}</span>
        </span>
      ))}
    </div>
  );
};

export default ResumenGeneros;
