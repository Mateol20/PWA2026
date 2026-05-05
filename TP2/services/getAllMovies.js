const CLAVE_API = "4a68574c";
const URL_BASE = "https://www.omdbapi.com/";

export const obtenerTodasLasPeliculas = async (pagina = 1, busqueda = "Batman") => {
  try {
    const url = new URL(URL_BASE);
    url.searchParams.append("apikey", CLAVE_API);
    url.searchParams.append("s", busqueda);
    url.searchParams.append("page", pagina.toString());

    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error("Error en la red");

    const datos = await respuesta.json();
    if (datos.Response === "True") {
      return datos.Search;
    }

    return [];
  } catch (error) {
    console.error("Error en obtenerTodasLasPeliculas:", error);
    return [];
  }
};
