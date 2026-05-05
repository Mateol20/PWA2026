import React from "react";
import ItemPelicula from "../ItemPelicula/ItemPelicula.jsx";

export default function TarjetaPelicula({ datos }) {
  if (!datos?.length) return null;

  return (
    <div className="p-4 md:p-10 w-full flex justify-center">
      <div className="bg-[#1e293b]/40 p-6 md:p-12 rounded-[2.5rem] border border-slate-800/50 shadow-2xl w-full max-w-[1500px]">
        <header className="mb-12">
          <h1 className="text-slate-100 text-3xl font-black border-l-4 border-blue-500 pl-4 uppercase tracking-tighter">
            MI BIBLIOTECA{" "}
            <span className="text-blue-500/60 text-lg font-light">
              ({datos.length})
            </span>
          </h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-20 justify-items-center">
          {datos.map((pelicula, index) => (
            <ItemPelicula
              key={`${pelicula.imdbID}-${index}`}
              item={pelicula}
              index={index}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
