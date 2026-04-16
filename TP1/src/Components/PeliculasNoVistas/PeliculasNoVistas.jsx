import React from "react";
import "./PeliculasNoVistas.css";
import Formulario from "../Formulario/Formulario";

export const PeliculasNoVistas = ({ filtroBusqueda , estado}) => {
  const conseguirPelis = () => {
    const peliculaStorage = JSON.parse(localStorage.getItem("peliculas"));
    return peliculaStorage;
  };

const pelisTotal = conseguirPelis();
  
const cambiarEstado = (titulo)=>{
    console.log(pelisTotal)
    pelisTotal.map ( x =>{
      if (x.titulo === titulo) {
      x.estado = true
      localStorage.setItem("peliculas", JSON.stringify(pelisTotal));
    }
    })
        console.log(pelisTotal)
}
let peliculasEstado = ""
console.log(estado)
//  const estadoPelicula = () => {
  switch (estado) {
    case "todas": pelisTotal 
      
      break;
      case "pendientes": 
         peliculasEstado =  pelisTotal.filter((pelicula)=>{
        return estado = pelicula.estado == true})
      break;
    case "vistas":
         peliculasEstado =  pelisTotal.filter((pelicula)=>{
        return estado = pelicula.estado == true}) 
      
      break;
  
    default:

      break;
  }
//  }



    const busquedaSegura = filtroBusqueda || "";
    const peliculasFiltradas = peliculasEstado.filter((peli) => {
    const tituloPeli = peli.titulo ? peli.titulo.toLowerCase() : "";
    const textoABuscar = busquedaSegura.toLowerCase();
    return tituloPeli.includes(textoABuscar);
  });
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
            <button className="boton" onClick={()=>cambiarEstado(peli.titulo)}>Marcar como vista</button>
          </div>
        ))
      ) : (
        <p style={{ color: "#334e68" }}>No se encontraron películas...</p>
      )}
    </div>
  );
};
