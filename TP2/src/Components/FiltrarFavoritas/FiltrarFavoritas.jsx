import React from 'react'
export const FiltrarFavoritas = (pelisTotal) => {
    const filtrarFavoritos = ()=>{
        const pelisFiltradas = pelisTotal.filter (peli => peli.response == true)
        return pelisFiltradas
    }
    const filtradas = filtrarFavoritos()
    const nombres = filtradas.map(peli=>peli.titulo)
    console.log(nombres) 
  return (
    <div>
        <input type="submit" className='MostrarFavoritos'> Favoritas </input>
    </div>
  )
}
