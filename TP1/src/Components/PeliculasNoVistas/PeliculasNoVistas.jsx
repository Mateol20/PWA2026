import "./PeliculasNoVistas.css";
const PeliculasNoVistas = ({ filtroBusqueda, datosPeliculas }) => {
  const busquedaSegura = filtroBusqueda || "";
  const peliculasFiltradas = (datosPeliculas || []).filter((peli) => {
    const tituloPeli = peli.titulo ? peli.titulo.toLowerCase() : "";
    const textoABuscar = busquedaSegura.toLowerCase();
    return tituloPeli.includes(textoABuscar);
  });
  console.log("Buscando:", filtroBusqueda);
  console.log("Peliculas encontradas:", peliculasFiltradas.length);
  return (
    <div className="container">
      {peliculasFiltradas.length > 0 ? (
        peliculasFiltradas.map((peli, index) => (
          <div key={index} className="tarjeta">
            <label className="dato">{peli.titulo}</label>
            <label className="dato">{peli.anio}</label>
            <label className="dato">{peli.director}</label>
            <label className="dato">{peli.genero}</label>
            <label className="dato">{peli.tipo}</label>
            <button className="boton">Marcar como vista</button>
          </div>
        ))
      ) : (
        <p style={{ color: "#334e68" }}>No se encontraron películas...</p>
      )}
    </div>
  );
};
export default PeliculasNoVistas;
