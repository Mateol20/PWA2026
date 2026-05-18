import { API_BASE_URL, ITEMS_PER_PAGE } from "../config";

export const obtenerTodasLasPeliculas = async (pagina = 1, busqueda = "") => {
  try {
    const url = new URL(API_BASE_URL);
    url.searchParams.append("page", pagina.toString());
    url.searchParams.append("limit", ITEMS_PER_PAGE.toString());

    if (busqueda?.trim()) {
      url.searchParams.append("search", busqueda.trim());
    }

    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      if (respuesta.status === 404) return [];
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    return Array.isArray(datos) ? datos : [];
  } catch (error) {
    console.error("Error en obtenerTodasLasPeliculas:", error);
    return [];
  }
};
