import React from 'react'
import "./PeliculasVistas.css";

export const PeliculasVistas = () => {
    const conseguirPelis = () => {
    const peliculaStorage = JSON.parse(localStorage.getItem("peliculas"));
    return peliculaStorage;
    }
    const peliculas= conseguirPelis();
    const arrayVistas=[]
      // peliculas.map(pelicula=>{
      //   if(pelicula.estado == true){
      //       // alert("hola")
      //       arrayVistas.push(pelicula)
    // }})

            const peliculaFiltrada = peliculas.filter((pelicula)=>{
              const estado = pelicula.estado == true
                return estado
            })
        
// console.log(peliculaFiltrada)
// console.log(arrayVistas)
// console.log(peli.titulo)
    
return (
        <>
            {peliculaFiltrada.map((peli, index) => {
                // ¡AQUÍ ESTÁ EL CAMBIO CLAVE!
                return ( 
                    <div key={index} className="tarjeta">
                        <label className="dato">{peli.titulo}</label>
                        <label className="dato">{peli.anio}</label>
                        <label className="dato">{peli.director}</label>
                        <label className="dato">{peli.genero}</label>
                        <label className="dato">{peli.tipo}</label>
                    </div>
                );
            })}
        </>
    );
}
