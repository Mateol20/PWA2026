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

  const pelisTotal = conseguirPelis()
  
  return (
    <>
{pelisTotal.map(peli=>{
  return( 
    <div id="container" className="container">
  <div id="tarjeta" className="tarjeta">
            <label id="titulo" className='dato' > {peli.titulo} </label>
            <label id="anio" className='dato'> {peli.anio}  </label>
            <label id='director' className='dato'> {peli.director}  </label>
            <label id='genero' className='dato'> {peli.genero}  </label>
            <label id='tipo' className='dato'> {peli.tipo}  </label>
            <button id='boton'>Marcar como vista</button>
            </div>
            </div>
            )
})}
    </>
  )
 
}
// tipo, genero, año, director, titulo boton para marcar como vista