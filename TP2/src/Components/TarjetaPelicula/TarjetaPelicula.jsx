import React from "react";

function TarjetaPelicula({ datos }) {
  if (!datos || datos.length === 0) return null;
  return (
    <div className="p-10">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
        {datos.map((item) => (
          /* --- TARJETA INDIVIDUAL --- */
          <article
            key={item.imdbID}
            className="w-64 h-96 bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col hover:scale-105 transition-transform duration-300"
          >
            {/* Contenedor de la Imagen*/}
            <div className="h-56 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={
                  item.Poster !== "N/A"
                    ? item.Poster
                    : "https://via.placeholder.com/300x450"
                }
                alt={item.Title}
              />
            </div>

            {/* Contenedor de Texto y Detalles */}
            <div className="px-5 py-3 flex flex-col flex-grow bg-white z-10">
              {/* --- TÍTULO --- */}
              <h2 className="text-slate-900 font-bold text-lg md:text-xl line-clamp-2 min-h-[3rem] leading-tight mb-1">
                {item.Title}
              </h2>

              {/* Año */}
              <p className="text-slate-400 font-semibold mb-3">({item.Year})</p>

              {/*IMDB SCORE*/}
              <div className="grid grid-cols-2 justify-between items-center mt-auto border-t border-slate-100 pt-3">
                <div className="flex flex-col">
                  <span className="text-yellow-500 text-xs font-black">
                    {item.imdbRating !== "N/A" ? "IMDB" : "Sin calificación"}
                  </span>
                  <div className="text-2xl font-bold flex gap-x-1 items-center text-slate-900">
                    {item.imdbRating !== "N/A" ? item.imdbRating : "--"}
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                        fill="#eab308"
                      />
                    </svg>
                  </div>
                </div>
                {/* Ranking */}
                <span className="text-3xl justify-self-end font-bold text-slate-300">
                  # {datos.indexOf(item) + 1}{" "}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default TarjetaPelicula;
