const CLAVE_API = "4a68574c";
export const getMovieById = async (imdbID) => {
  if (!imdbID) return null;
  try {
    const url = `https://www.omdbapi.com/?i=${imdbID.trim()}&apikey=${CLAVE_API}`;
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error("Error en la conexión con la API");
    const datos = await respuesta.json();
    return datos.Response === "True" ? datos : null;
  } catch (error) {
    console.error("Error obteniendo el detalle de la película:", error);
    return null;
  }
};
