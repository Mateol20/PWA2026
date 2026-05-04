const API_KEY = "4a68574c";

export const getMovieById = async (imdbID) => {
  // Verificamos que el ID exista antes de hacer el fetch
  if (!imdbID) return null;

  try {
    const url = `https://www.omdbapi.com/?i=${imdbID.trim()}&apikey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) throw new Error("Error en la conexión con la API");

    const data = await response.json();

    // OMDb siempre devuelve Response: "True" o "False"
    return data.Response === "True" ? data : null;
  } catch (error) {
    console.error("Error obteniendo el detalle de la película:", error);
    return null;
  }
};
