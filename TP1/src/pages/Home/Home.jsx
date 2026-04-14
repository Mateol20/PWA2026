import Titulo from "../../Components/Titulo/Titulo.jsx";
import Filtro from "../../Components/Filtro/Filtro.jsx";
import { useState } from "react";
const Home = () => {
  const [filtro, setFiltro] = useState("todas");
  return (
    <section>
      <Titulo texto="Mi gestor de peliculas y series" />
      <Filtro filtroActual={filtro} setFiltroActual={setFiltro} />
    </section>
  );
};

export default Home;
