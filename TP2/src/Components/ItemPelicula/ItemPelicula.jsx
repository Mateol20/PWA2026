import React, { useState } from "react";
import { Link } from "react-router-dom";
const EstrellaIcono = () => (
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 24 24"
    fill="none"
    className="mb-0.5"
  >
    <path
      d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
      fill="#eab308"
    />
  </svg>
);

export default function ItemPelicula({ item, index }) {
  const [imgSrc, setImgSrc] = useState(
    item.Poster !== "N/A"
      ? item.Poster
      : item.Images?.[0] ||
          "https://placehold.co/400x600?text=Poster+No+Disponible",
  );

  const manejarErrorImagen = () => {
    if (imgSrc === item.Poster && item.Images?.[0]) {
      setImgSrc(item.Images[0]);
    } else {
      setImgSrc("https://placehold.co/400x600?text=Imagen+No+Encontrada");
    }
  };

  return (
    <article className="w-80 h-[29rem] bg-[#1e293b] border border-slate-700/50 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col hover:scale-105 transition-all duration-300 hover:border-blue-500/50 group">
      {/* Contenedor de la Imagen */}
      <div className="h-72 w-full overflow-hidden bg-black relative">
        <img
          className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          src={imgSrc}
          alt={item.Title}
          onError={manejarErrorImagen}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-60"></div>
      </div>
      {/* Contenido de Texto */}
      <div className="px-5 py-5 flex flex-col flex-grow bg-[#1e293b] z-10">
        <h2 className="text-slate-50 font-bold text-lg md:text-xl line-clamp-2 min-h-[3.5rem] leading-tight mb-1 group-hover:text-blue-400 transition-colors">
          <Link to={`/pelicula/${item.imdbID}`}>{item.Title}</Link>
        </h2>
        <p className="text-slate-400 font-medium text-sm mb-4">
          Publicado en <span className="text-slate-300">{item.Year}</span>
        </p>
        <div className="grid grid-cols-2 justify-between items-center mt-auto border-t border-slate-700/60 pt-4">
          <div className="flex flex-col">
            <span className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.15em] mb-0.5">
              Rating IMDB
            </span>
            <div className="text-2xl font-bold flex gap-x-1.5 items-center text-slate-50">
              {item.imdbRating !== "N/A" ? item.imdbRating : "--"}
              <EstrellaIcono />
            </div>
          </div>

          <span className="text-3xl justify-self-end font-bold text-blue-500/20 italic group-hover:text-blue-500/60 transition-all">
            #{index + 1}
          </span>
        </div>
      </div>
    </article>
  );
}
