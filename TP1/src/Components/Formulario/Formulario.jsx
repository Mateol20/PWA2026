import React, { useState } from 'react'
// import React, { component } from 'react'
import {FormEvent} from 'react'
import './Formulario.css'

const Formulario = () => {
  const [datoUno, setDatos] = useState({
    titulo: '',
    director: ''
  })

  const handleChange = (e) => {
    const {name, value } = e.target;
    console.log(name, value);
    setDatos({[name] : value})
    console.log({datoUno})

  };


  // console.log(name, value);
  return ( 
<div className="container">
  <form className="tarjeta"
  //  onSubmit={ev=>{  ev.preventDefault;

  //   const titulo = ev.target.titulo.value;
  //   const director = ev.target.director.value;

  //   console.log(titulo,director)
  // }}
  >
    <h2>Nueva Pelicula</h2>
    
    <div className="input">
      <input type="text" name="titulo" id="titulo" placeholder="Titulo" onChange={handleChange} />
    </div>


    <div className="input">
      <input type="text" name="director" id="director" placeholder="Director" onChange={handleChange}/>
    </div>
    

    <div className="input">
      <input type="text" name="anio" id="anio" placeholder="Año" onChange={handleChange} />
    </div>
    
    <div className="input">
      <input type="text" name="rating" id="rating" placeholder="Rating" onChange={handleChange} />
    </div>

    <div className="input" name="genero" onChange={handleChange} >
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


    <div className="input" name="tipo" onChange={handleChange} >
      <select>
        <option>Pelicula</option>
        <option>Serie</option>
      </select>
    </div>

    <button type="submit">Cargar</button>
  
  </form>
  {/* {alert(2)} */}
</div>
)
}
export default Formulario;