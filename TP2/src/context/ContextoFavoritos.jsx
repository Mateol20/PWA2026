import { createContext, useContext, useState, useEffect, useCallback } from "react";

const CLAVE_FAVORITOS = "peliculas";

const ContextoFavoritos = createContext();

export const useFavoritos = () => {
  const contexto = useContext(ContextoFavoritos);
  if (!contexto) {
    throw new Error("useFavoritos debe usarse dentro de ProveedorFavoritos");
  }
  return contexto;
};

const obtenerFavoritosGuardados = () => {
  try {
    const guardado = localStorage.getItem(CLAVE_FAVORITOS);
    return guardado ? JSON.parse(guardado) : [];
  } catch {
    return [];
  }
};

export const ProveedorFavoritos = ({ children }) => {
  const [favoritos, setFavoritos] = useState(obtenerFavoritosGuardados);

  useEffect(() => {
    localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos));
  }, [favoritos]);

  const alternarFavorito = useCallback((pelicula) => {
    setFavoritos((prev) => {
      const yaExiste = prev.find((p) => p.imdbID === pelicula.imdbID);
      if (yaExiste) {
        return prev.filter((p) => p.imdbID !== pelicula.imdbID);
      }
      return [...prev, pelicula];
    });
  }, []);

  const esFavorito = useCallback(
    (imdbID) => {
      return favoritos.some((p) => p.imdbID === imdbID);
    },
    [favoritos]
  );

  return (
    <ContextoFavoritos.Provider value={{ favoritos, alternarFavorito, esFavorito }}>
      {children}
    </ContextoFavoritos.Provider>
  );
};
