import React from 'react'
import './PeliculasNoVistas.css'

export const PeliculasNoVistas = () => {
  return (
    <div id="container" className="container">
        <div id="tarjeta" className="tarjeta">
            <label id="titulo" className='dato'> Titulo  </label>
            <label id="anio" className='dato'> Año  </label>
            <label id='director' className='dato'> Director  </label>
            <label id='genero' className='dato'> Genero  </label>
            <label id='tipo' className='dato'> tipo  </label>
            <button id='boton'>Marcar como vista</button>
        </div>
    </div>
  )
}
// tipo, genero, año, director, titulo boton para marcar como vista