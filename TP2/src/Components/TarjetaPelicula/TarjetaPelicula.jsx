import React, { useState } from "react";

function ItemPelicula({ item, index }) {
  const [imgSrc, setImgSrc] = useState(
    item.Poster !== "N/A" ? item.Poster : item.Images[0]
  );

  const manejarErrorImagen = () => {
    if (imgSrc === item.Poster && item.Images && item.Images[0]) {
      setImgSrc(item.Images[0]);
    } else {
      setImgSrc("https://placehold.co/400x600?text=Poster+No+Disponible");
    }
  };

  return (
    <article
      key={item.imdbID}
      /* Fondo oscuro slate-900 y un borde sutil para dar profundidad */
      className="w-80 h-[28rem] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col hover:scale-105 transition-all duration-300 hover:border-blue-500/50 group"
    >
      {/* Contenedor de la Imagen: bg-slate-950 para cuando la imagen carga */}
      <div className="h-72 w-full overflow-hidden bg-slate-950">
        <img
          className="w-full h-full object-cover object-top"
          src={imgSrc}
          alt={item.Title}
          onError={manejarErrorImagen} 
        />
      </div>

      {/* Contenedor de Texto: Cambiamos a bg-slate-900 para que coincida con el card */}
      <div className="px-5 py-4 flex flex-col flex-grow bg-slate-900 z-10">
        <h2 className="text-slate-100 font-bold text-lg md:text-xl line-clamp-2 min-h-[3.5rem] leading-tight mb-1 group-hover:text-blue-400 transition-colors">
          {item.Title}
        </h2>
        <p className="text-slate-500 font-semibold text-sm mb-3">({item.Year})</p>

        {/* Separador sutil y métricas */}
        <div className="grid grid-cols-2 justify-between items-center mt-auto border-t border-slate-800 pt-3">
          <div className="flex flex-col">
            <span className="text-yellow-500 text-[10px] font-black uppercase tracking-widest">
              {item.imdbRating !== "N/A" ? "IMDB Rating" : "Sin calificación"}
            </span>
            <div className="text-2xl font-bold flex gap-x-1 items-center text-slate-100">
              {item.imdbRating !== "N/A" ? item.imdbRating : "--"}
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                  fill="#eab308"
                />
              </svg>
            </div>
          </div>
          <span className="text-3xl justify-self-end font-bold text-blue-500/80 italic">
            # {index + 1}
          </span>
        </div>
      </div>
    </article>
  );
}

/* --- COMPONENTE PRINCIPAL --- */
function TarjetaPelicula({ datos }) {
  if (!datos || datos.length === 0) return null;

  return (
    /* Cambiado a bg-slate-950 para el fondo general de la grilla */
    <div className="p-10 bg-slate-950 min-h-screen">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
        {datos.map((item, index) => (
          <ItemPelicula key={item.imdbID} item={item} index={index} />
        ))}
      </section>
    </div>
  );
}

export default TarjetaPelicula;