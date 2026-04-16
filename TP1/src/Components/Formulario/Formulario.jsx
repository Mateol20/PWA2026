import { useState } from "react";
import "./Formulario.css";
import Boton from "../Boton/Boton.jsx"; // <--- VERIFICÁ QUE ESTA RUTA SEA CORRECTA
import { guardarEnLocalStorage } from "../../utils/LocalStorage.js";
import InputComponent from "../InputComponent/InputComponent.jsx";
const Formulario = ({ alCerrar }) => {
  const [pelicula, setPelicula] = useState({
    titulo: "",
    director: "",
    anio: "",
    rating: "",
    genero: "Seleccionar Genero",
    tipo: "Pelicula",
    estado: false
  });

  const manejarCambio = (e) => {
    const { id, value } = e.target;
    setPelicula({ ...pelicula, [id]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!pelicula.titulo) {
      alert("Por favor ingresá el título");
      return;
    }
    guardarEnLocalStorage("peliculas", pelicula);
    alert("¡Película guardada con éxito!");
    alCerrar();
  };

  return (
    <div className="modal-container-fixed">
      <form className="modal-card-flotante" onSubmit={manejarEnvio}>
        <div className="contenedor-cerrar">
          <Boton texto="×" onClick={alCerrar} tipo="peligro" />
        </div>

        <h2>Cargar Pelicula</h2>

        <InputComponent
          id="titulo"
          placeholder="Título"
          onChange={manejarCambio}
          value={pelicula.titulo}
        />
        <InputComponent
          id="director"
          placeholder="Director"
          onChange={manejarCambio}
          value={pelicula.director}
        />
        <InputComponent
          id="anio"
          placeholder="Año"
          onChange={manejarCambio}
          value={pelicula.anio}
        />
        <InputComponent
          id="rating"
          placeholder="Rating"
          onChange={manejarCambio}
          value={pelicula.rating}
        />

        <div className="input-select">
          <select id="genero" onChange={manejarCambio} value={pelicula.genero}>
            <option disabled>Seleccionar Genero</option>
            <option value="Comedia">Comedia</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
            <option value="Infantil">Infantil</option>
            <option value="Anime">Anime</option>
            <option value="Suspenso">Suspenso</option>
            <option value="Accion">Accion</option>
          </select>
        </div>

        <div className="input-select">
          <select id="tipo" onChange={manejarCambio} value={pelicula.tipo}>
            <option value="Pelicula">Pelicula</option>
            <option value="Serie">Serie</option>
          </select>
        </div>

        <Boton texto="Cargar Película" tipo="primario" type="submit" />
      </form>
    </div>
  );
};
export default Formulario;
