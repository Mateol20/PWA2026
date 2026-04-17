import "./ListaPeliculas.css";

const ListaPeliculas = ({
  filtroBusqueda,
  datosPeliculas,
  filtroEstado,
  filtroGenero,
  onMarcarVista,
}) => {
  const busquedaSegura = filtroBusqueda || "";

  const peliculasFiltradas = (datosPeliculas || []).filter((peli) => {
    const tituloPeli = peli.titulo ? peli.titulo.toLowerCase() : "";
    const coincideTexto = tituloPeli.includes(busquedaSegura.toLowerCase());
    let coincideFiltro = true;
    if (filtroEstado === "vistas") {
      coincideFiltro = peli.vista === true;
    } else if (filtroEstado === "pendientes") {
      coincideFiltro = peli.vista === false || !peli.vista;
    }
    const coincideGenero =
      !filtroGenero || filtroGenero === "Todos" || peli.genero === filtroGenero;
    return coincideTexto && coincideFiltro && coincideGenero;
  });

  return (
    <div className="container">
      {peliculasFiltradas.length > 0 ? (
        peliculasFiltradas.map((peli, index) => (
          <div key={index} className="tarjeta">
            <h3 className="titulo-peli">{peli.titulo}</h3>

            <div className="info-grupo">
              <p>
                <strong>Rating:</strong> ⭐ {peli.rating || "N/A"}
              </p>
              <p>
                <strong>Año:</strong> {peli.anio}
              </p>
              <p>
                <strong>Director:</strong> {peli.director}
              </p>
              <p>
                <strong>Género:</strong> {peli.genero}
              </p>
              <p>
                <strong>Formato:</strong> {peli.tipo}
              </p>
            </div>

            <button
              className={peli.vista ? "boton vista" : "boton"}
              onClick={() => onMarcarVista(peli.titulo)}
            >
              {peli.vista ? "✓ Vista" : "Marcar como vista"}
            </button>
          </div>
        ))
      ) : (
        <p style={{ color: "#334e68", textAlign: "center", width: "100%" }}>
          No se encontraron películas...
        </p>
      )}
    </div>
  );
};

export default ListaPeliculas;
