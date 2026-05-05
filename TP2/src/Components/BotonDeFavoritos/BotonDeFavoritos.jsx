// import React, { useEffect, useState } from 'react'
// import { guardarEnLocalStorage } from "../../../utils/LocalStorage"

//  const BotonDeFavoritos = ({peli}) => {
//   const [esFav , setEsFav] = useState(false)
//   console.log( esFav)
//   useEffect( () => {
//     if(!peli){

//       const pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || []
//       const existe = pelisGuardadas.some( fav => fav.Title == peli.Title)
//       setEsFav(existe)
//     }
//     }
//   )
//   const guardarPelicula = () => {
//     const pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || []

//     if(esFav){
//       setEsFav(false)
//       const peliculaBorrada = pelisGuardadas.filter(unaPeli => unaPeli.Title !== peli.Title )
//       localStorage.setItem('peliculas', JSON.stringify(peliculaBorrada))
//       console.log('eliminado' , esFav)
//     }else{
//       console.log("agregada")
//       setEsFav(true)  
//       console.log("Película seleccionada:", peli.Title);
//       const guradarPelicula = guardarEnLocalStorage("peliculas",peli)
//     }
//     console.log( esFav)
//     return pelisGuardadas
//     // console.log(JSON.parse(localStorage.getItem("peliculas")))
//   };


//   return (  
//     <>
//     {guardarPelicula}
//     {/* <button className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full 
//              bg-white/10 backdrop-blur-md border border-white/20 
//              shadow-lg text-white hover:bg-red-500 hover:scale-110 
//              transition-all duration-300 group z-20"
//       onClick={()=>guardarPelicula()} >
//         <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//         <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/>
//         </svg>
//       </button> */}
//     </>
//   )
// }
// export default BotonDeFavoritos

import { guardarEnLocalStorage } from "../../../utils/LocalStorage";

export const BotonDeFavoritos = (peli) => {
    const pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];
    const existe = pelisGuardadas.some(fav => fav.imdbID === peli.imdbID);

    if (existe) {
        // Borrar
        const nuevasPelis = pelisGuardadas.filter(fav => fav.imdbID !== peli.imdbID);
        localStorage.setItem("peliculas", JSON.stringify(nuevasPelis));
        console.log("Eliminado de favoritos");
        console.log(pelisGuardadas);
      } else {
        // Guardar (usando tu utilidad)
        guardarEnLocalStorage("peliculas", peli);
        console.log("Guardado en favoritos");
        console.log(pelisGuardadas);
    }
};