import React from "react";
import ItemPelicula from "../ItemPelicula/ItemPelicula.jsx";

export default function TarjetaPelicula({ datos }) {
  if (!datos?.length)
    return <p className="text-white text-center p-10">Cargando...</p>;
  return (
    <main className="p-6 md:p-10 bg-fondo-app min-h-screen">
      <header className="mb-10 max-w-7xl mx-auto">
        <h1 className="text-slate-100 text-3xl font-black border-l-4 border-acento pl-4">
          MI BIBLIOTECA{" "}
          <span className="text-acento/60 text-lg font-light">
            ({datos.length})
          </span>
        </h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 justify-items-center max-w-7xl mx-auto">
        {datos.map((pelicula, index) => (
          <ItemPelicula
            key={pelicula.imdbID || index}
            item={pelicula}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}
