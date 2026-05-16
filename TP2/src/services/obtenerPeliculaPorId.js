import { API_BASE_URL } from "../config";

export const obtenerPeliculaPorId = async (imdbID) => {
  try {
    const url = new URL(API_BASE_URL);
    url.searchParams.append("search", imdbID.trim());

    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      if (respuesta.status === 404) return null;
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    if (!Array.isArray(datos)) return null;

    return datos.find((p) => p.imdbID === imdbID.trim()) || null;
  } catch (error) {
    console.error("Error en obtenerPeliculaPorId:", error);
    return null;
  }
};
