const BotonEstado = ({ esVista, alHacerClic }) => {
  return (
    <button
      className={esVista ? "boton-vista" : "boton-pendiente"}
      onClick={alHacerClic}
    >
      {esVista ? "Vista ✓" : "Marcar como vista"}
    </button>
  );
};

export default BotonEstado;
