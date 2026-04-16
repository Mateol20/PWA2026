const InputComponent = ({ id, placeholder, onChange, value }) => {
  return (
    <div className="input">
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value} // El valor viene del estado de Formulario
        onChange={onChange} // <--- ESTO ES LO QUE PERMITE ESCRIBIR
      />
    </div>
  );
};

export default InputComponent;
