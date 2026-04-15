import React from 'react'
import './PeliculasNoVistas.css'
import Formulario from '../Formulario/Formulario'

export const PeliculasNoVistas = () => {
  // <Formulario/>
  // let titulo = Formulario.pelicula['titulo']; 
  const conseguirPelis = ()=>{
  const peliculaStorage = JSON.parse(localStorage.getItem("peliculas"))
    return peliculaStorage
  }

 const pelisTotal = conseguirPelis();

return (
  <div className="container"> {/* EL CONTENEDOR VA AFUERA */}
    {pelisTotal && pelisTotal.map((peli, index) => {
      return (
        <div key={index} className="tarjeta"> {/* SOLO LA TARJETA VA ADENTRO */}
          <label className='dato'>{peli.titulo}</label>
          <label className='dato'>{peli.anio}</label>
          <label className='dato'>{peli.director}</label>
          <label className='dato'>{peli.genero}</label>
          <label className='dato'>{peli.tipo}</label>
          <button className='boton'>Marcar como vista</button>
        </div>
      );
    })}
  </div>
);
 
}
// tipo, genero, año, director, titulo boton para marcar como vista