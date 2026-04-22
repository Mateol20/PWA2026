import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { getAllMovies } from "../../../services/getAllMovies";
import TarjetaPelicula from "../../Components/TarjetaPelicula/TarjetaPelicula";

const Home = () => {
  const [todasLasPelis, setTodasLasPelis] = useState([]);
  const [peliculasVisibles, setPeliculasVisibles] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);
  const limitePorPagina = 8;
  useEffect(() => {
    const cargarTodo = async () => {
      setLoading(true);
      const respuesta = await getAllMovies(1, 100);
      setTodasLasPelis(respuesta);
      setPeliculasVisibles(respuesta.slice(0, limitePorPagina));
      setLoading(false);
    };
    cargarTodo();
  }, []);

  const cargarMas = () => {
    const nuevaPagina = pagina + 1;
    const inicio = 0;
    const fin = nuevaPagina * limitePorPagina;

    setPeliculasVisibles(todasLasPelis.slice(inicio, fin));
    setPagina(nuevaPagina);
  };

  return (
    <main className="min-h-screen bg-[#0f172a] pb-10">
      {" "}
      <h1 className="text-4xl font-bold text-white text-center py-10">
        Cartelera
      </h1>
      <TarjetaPelicula datos={peliculasVisibles} />
      <div className="flex justify-center mt-10">
        {peliculasVisibles.length < todasLasPelis.length && (
          <button
            onClick={cargarMas}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg"
          >
            Cargar más películas
          </button>
        )}
      </div>
    </main>
  );
};

export default Home;
