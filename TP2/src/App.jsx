import { BrowserRouter as Enrutador, Routes, Route } from "react-router-dom";
import { ProveedorFavoritos } from "./context/ContextoFavoritos";
import Inicio from "./pages/Home/Home";
import "./App.css";
import Encabezado from "./Components/Header/Header";
import PieDePagina from "./Components/Footer/Footer";
import DetallePelicula from "./pages/DetallePelicula/DetallePelicula";
import PaginaDeFavoritos from "./pages/Favoritos/PaginaDeFavoritos";

function App() {
  return (
    <Enrutador>
      <ProveedorFavoritos>
        <Encabezado />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/pelicula/:imdbID" element={<DetallePelicula />} />
          <Route path="/favoritos" element={<PaginaDeFavoritos />} />
        </Routes>
        <PieDePagina />
      </ProveedorFavoritos>
    </Enrutador>
  );
}

export default App;
