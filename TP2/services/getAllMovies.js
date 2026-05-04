const API_KEY = "4a68574c";
const BASE_URL = "https://www.omdbapi.com/";

export const getAllMovies = async (page = 1, search = "Batman") => {
  try {
    const url = new URL(BASE_URL);
    url.searchParams.append("apikey", API_KEY);
    url.searchParams.append("s", search);
    url.searchParams.append("page", page.toString());

    const response = await fetch(url);
    if (!response.ok) throw new Error("Error en la red");

    const data = await response.json();
    if (data.Response === "True") {
      return data.Search;
    }

    return [];
  } catch (error) {
    console.error("Error en getAllMovies:", error);
    return [];
  }
};
