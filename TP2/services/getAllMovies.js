const API_URL = "https://69e65c86ce4e908a155f6c79.mockapi.io/api/v1/pelicula";

export const getAllMovies = async (page = 1, limit = 8, search = "") => {
  try {
    const url = new URL(API_URL);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", limit.toString());
    if (search) {
      url.searchParams.append("Title", search);
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error en la red");
    const data = await response.json();
    const finalData = Array.isArray(data[0]) ? data[0] : data;
    return Array.isArray(finalData) ? finalData : [];
  } catch (error) {
    console.error("Error en getAllMovies:", error);
    return [];
  }
};
