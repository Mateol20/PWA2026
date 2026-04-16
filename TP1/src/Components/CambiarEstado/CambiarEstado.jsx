import React from 'react'

export const CambiarEstado = () => {
  
  const actualizarEstadoPelicula = (tituloPelicula) => {
    // 1. Obtener las películas del storage
    const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

    // 2. Crear un nuevo array con el estado modificado
    const peliculasActualizadas = peliculas.map(peli => {
      if (peli.titulo === tituloPelicula) {
        // Cambiamos el estado (si era true pasa a false, y viceversa)
        return { ...peli, estado: !peli.estado }; 
      }
      return peli;
    });

    // 3. Guardar el array actualizado de vuelta en localStorage
    localStorage.setItem("peliculas", JSON.stringify(peliculasActualizadas));

    // Opcional: podrías disparar un mensaje o refrescar la página
    console.log(`Estado de ${tituloPelicula} actualizado.`);
  };

  return (
    <div>
      {/* Ejemplo de cómo llamarías a la función */}
      <button onClick={() => actualizarEstadoPelicula("Titanic")}>
        Cambiar Estado de Titanic
      </button>
    </div>
  );
};