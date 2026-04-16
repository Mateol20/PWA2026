const InputComponent = ({ id, placeholder, onChange, value }) => {
  return (
    <div className="input">
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
