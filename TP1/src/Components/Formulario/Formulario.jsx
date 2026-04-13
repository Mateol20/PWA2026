import React from 'react'
import './Formulario.css'
const Formulario = () => {
  return ( 

<div className="container">
  <form className="tarjeta">
    <h2>Nueva Pelicula</h2>
    
    <div className="input">
      <input type="text" id="titulo" placeholder="Titulo"/>
    </div>


    <div className="input">
      <input type="text" id="director" placeholder="Director"/>
    </div>
    

    <div className="input">
      <input type="text" id="anio" placeholder="Año"/>
    </div>
    
    <div className="input">
      <input type="text" id="rating" placeholder="Rating"/>
    </div>

    <div className="input">
        <select>
        <option>Seleccionar Genero</option>
        <option>Comedia</option>
        <option>Romance</option>
        <option>Terror</option>
        <option>Infantil</option>
        <option>Anime</option>
        <option>Suspenso</option>
        <option>Accion</option>
      </select>
    </div>


    <div className="input">
      <select>
        <option>Pelicula</option>
        <option>Serie</option>
      </select>
    </div>

    <button type="submit">Cargar</button>
  
  </form>
</div>

)
}
export default Formulario;