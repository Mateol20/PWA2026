import "./ListaPeliculas.css"; // Recuerda renombrar tu CSS o mantener el anterior
const ListaPeliculas = ({
  filtroBusqueda,
  datosPeliculas, // <--- CAMBIA ESTO (estaba como datosAnimes)
  filtroEstado,
  filtroGenero,
  onMarcarVista,
}) => {
  const busquedaSegura = filtroBusqueda || "";

  // Ahora asegúrate de usar datosPeliculas aquí también
  const animesFiltrados = (datosPeliculas || []).filter((anime) => {
    // ... tu lógica de filtrado ...
    const tituloAnime = anime.title ? anime.title.toLowerCase() : "";
    const coincideTexto = tituloAnime.includes(busquedaSegura.toLowerCase());

    const coincideGenero =
      !filtroGenero ||
      filtroGenero === "Todos" ||
      (anime.genres && anime.genres.some((g) => g.name === filtroGenero));

    return coincideTexto && coincideGenero;
  });
  return (
    <div className="container">
      {animesFiltrados.length > 0 ? (
        animesFiltrados.map((anime) => (
          <div key={anime.mal_id} className="tarjeta">
            {/* Imagen del Anime (Nuevo) */}
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="imagen-anime"
            />

            <h3 className="titulo-peli">{anime.title}</h3>

            <div className="info-grupo">
              <p>
                <strong>Rating:</strong> ⭐ {anime.score || "N/A"}
              </p>
              <p>
                <strong>Año:</strong>{" "}
                {anime.year || anime.aired?.prop?.from?.year || "N/A"}
              </p>
              <p>
                <strong>Episodios:</strong> {anime.episodes || "En emisión"}
              </p>
              <p>
                <strong>Tipo:</strong> {anime.type}
              </p>
            </div>

            {/* Botón adaptado a Favoritos */}
            <button className="boton" onClick={() => onAgregarFavorito(anime)}>
              ❤️ Añadir a Favoritos
            </button>
          </div>
        ))
      ) : (
        <p style={{ color: "#334e68", textAlign: "center", width: "100%" }}>
          No se encontraron animes...
        </p>
      )}
    </div>
  );
};

export default ListaPeliculas;
