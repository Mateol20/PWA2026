import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { obtenerTodasLasPeliculas } from "../../../services/getAllMovies";
import TarjetaPelicula from "../../Components/TarjetaPelicula/TarjetaPelicula";
import { useBusqueda } from "../../context/ContextoBusqueda";

const Inicio = () => {
  const { t } = useTranslation();
  const { termino } = useBusqueda();
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [hayMas, setHayMas] = useState(true);
  const [cargando, setCargando] = useState(false);
  const busquedaPorDefecto = "Batman";

  const cargarMas = useCallback(async () => {
    if (cargando || !hayMas) return;
    setCargando(true);

    const textoBusqueda = termino || busquedaPorDefecto;
    const nuevas = await obtenerTodasLasPeliculas(pagina, textoBusqueda);

    if (nuevas.length === 0) {
      setHayMas(false);
    }

    setPeliculas((prev) => [...prev, ...nuevas]);
    setPagina((prev) => prev + 1);
    setCargando(false);
  }, [pagina, cargando, hayMas, termino]);

  useEffect(() => {
    setPeliculas([]);
    setPagina(1);
    setHayMas(true);
    setCargando(false);
  }, [termino]);

  useEffect(() => {
    if (peliculas.length === 0 && !cargando) {
      cargarMas();
    }
  }, []);

  useEffect(() => {
    if (!cargando) {
      cargarMas();
    }
  }, [termino]);

  const [referencia] = useInfiniteScroll({
    loading: cargando,
    hasNextPage: hayMas,
    onLoadMore: cargarMas,
  });

  return (
    <main className="min-h-screen bg-[#0f172a] pb-10">
      <h1 className="text-4xl font-bold text-white text-center py-10">
        {t("cartelera")}
      </h1>
      <TarjetaPelicula datos={peliculas} />
      <div className="flex justify-center mt-10" ref={referencia}>
        {cargando && (
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        )}
      </div>
      {!hayMas && peliculas.length > 0 && (
        <p className="text-slate-500 text-center py-6 font-medium italic">
          {t("noHayMas")}
        </p>
      )}
    </main>
  );
};

export default Inicio;
