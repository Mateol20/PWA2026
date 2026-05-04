import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import DetallePelicula from "./pages/DetallePelicula/DetallePelicula";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pelicula/:imdbID" element={<DetallePelicula />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
