import "./Boton.css";
const Boton = ({ texto, onClick, tipo = "primario", type = "button" }) => {
  return (
    <button type={type} className={`btn-general ${tipo}`} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
