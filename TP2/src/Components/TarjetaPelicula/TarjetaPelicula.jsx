import React from "react";
import { useTranslation } from "react-i18next";
import ItemPelicula from "../ItemPelicula/ItemPelicula.jsx";
import { useFavoritos } from "../../context/ContextoFavoritos.jsx";

export default function TarjetaPelicula({ datos }) {
  const { t } = useTranslation();
  const { alternarFavorito, esFavorito } = useFavoritos();

  if (!datos?.length)
    return <p className="text-white text-center p-10">{t("cargando")}</p>;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 justify-items-center max-w-7xl mx-auto">
      {datos.map((pelicula, indice) => (
        <ItemPelicula
          key={`${pelicula.imdbID}-${indice}`}
          pelicula={pelicula}
          indice={indice}
          esFavorito={esFavorito}
          alternarFavorito={alternarFavorito}
        />
      ))}
    </section>
  );
}
