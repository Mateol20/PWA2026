import { useState } from "react";
import  Formulario  from "../../Components/Formulario/Formulario.jsx";
import Titulo from "../../Components/Titulo/Titulo.jsx";
import styles from"./Home.module.css";
const Home = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  return (
    <>
    {mostrarFormulario && <Formulario/>}
    <section>
      <Titulo texto="Mi gestor de peliculas y series" />
    </section>
    <div> 
<button 
        className= {styles.agregarPelicula} 
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? "Cerrar" : "+"}
      </button>


      {/* <button className= {styles.agregarPelicula} > + </button> */}
    </div>
    </>
  );
};

export default Home;
