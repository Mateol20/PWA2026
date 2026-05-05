import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllMovies } from "../../../services/getAllMovies";
import TarjetaPelicula from "../../Components/TarjetaPelicula/TarjetaPelicula";

const Home = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limitePorPagina = 8;
  const cargarMas = async () => {
    const nuevas = await getAllMovies(pagina, "Batman");
    if (nuevas.length === 0) {
      setHasMore(false);
      return;
    }
    setPeliculas((prev) => [...prev, ...nuevas]);
    setPagina((prev) => prev + 1);
  };
  useEffect(() => {
    cargarMas();
  }, []);

  return (
    <main className="min-h-screen bg-[#0f172a] pb-10">
      <h1 className="text-4xl font-bold text-white text-center py-10 uppercase tracking-widest">
        Cartelera
      </h1>

      <InfiniteScroll
        dataLength={peliculas.length}
        next={cargarMas}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }
        endMessage={
          <p className="text-slate-500 text-center py-10 font-medium italic">
            — No hay más películas para mostrar —
          </p>
        }
      >
        <TarjetaPelicula datos={peliculas} />
      </InfiniteScroll>
    </main>
  );
};

export default Inicio;
