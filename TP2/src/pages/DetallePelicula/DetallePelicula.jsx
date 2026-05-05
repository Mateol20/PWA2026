import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieById } from "../../../services/getMovieById";
import { BotonDeFavoritos } from "../../Components/BotonDeFavoritos/BotonDeFavoritos";

export default function DetallePelicula() {
  const { imdbID } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchDetalle = async () => {
      setCargando(true);
      const data = await getMovieById(imdbID);
      if (data) {
        setPelicula(data);
      }
      setCargando(false);
    };

    if (imdbID) fetchDetalle();
  }, [imdbID]);

  const esFavorito = (id) => false;

  const toggleFavorite = (m) => BotonDeFavoritos(m);
  const t = (key) => key;

  if (cargando) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-blue-400 animate-pulse font-medium">
          Cargando película...
        </p>
      </div>
    );
  }

  if (!pelicula) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
        <p className="text-slate-400">No se encontró la película.</p>
        <Link to="/" className="text-blue-400 hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="text-slate-400 hover:text-blue-400 font-medium mb-6 inline-flex items-center gap-2 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver al Inicio
        </Link>

        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="md:flex">
            {/* Poster Section */}
            <div className="md:w-2/5">
              <img
                src={
                  pelicula.Poster !== "N/A"
                    ? pelicula.Poster
                    : "https://placehold.co/400x600?text=Sin+Poster"
                }
                alt={pelicula.Title}
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-3/5 p-8 md:p-10">
              <div className="flex items-start justify-between gap-4 mb-6">
                <h1 className="text-3xl font-bold text-slate-100">
                  {pelicula.Title}
                </h1>
                <button
                  onClick={() => toggleFavorite(pelicula)}
                  className={`p-2 rounded-full transition-colors ${
                    esFavorito(pelicula.imdbID)
                      ? "text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/20"
                      : "text-slate-400 bg-slate-800 hover:bg-slate-700"
                  }`}
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-sm border-b border-slate-800 pb-6">
                  <div>
                    <span className="text-slate-500 block mb-1">Año</span>
                    <p className="text-slate-200 font-semibold">
                      {pelicula.Year}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1">Género</span>
                    <p className="text-slate-200 font-semibold">
                      {pelicula.Genre}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1">Rating</span>
                    <p className="text-yellow-400 font-bold text-lg">
                      {pelicula.imdbRating}
                    </p>
                  </div>
                </div>

                {/* Movie Details */}
                <div className="space-y-4">
                  <div>
                    <span className="text-slate-500 font-medium text-sm">
                      Director
                    </span>
                    <p className="text-slate-200">{pelicula.Director}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium text-sm">
                      Actores
                    </span>
                    <p className="text-slate-200">{pelicula.Actors}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium text-sm">
                      Sinopsis
                    </span>
                    <p className="text-slate-300 leading-relaxed mt-1">
                      {pelicula.Plot}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
