import React from "react";

const Etiqueta = ({ tipo }) => {
  const esPeli = tipo === "pelicula";
  const estilos = esPeli
    ? "w-32 h-32 rounded-full bg-red-500/10 border-2 border-red-500/50 text-red-500 border-dotted rounded-full"
    : "w-32 h-32 rounded-full bg-emerald-950/30 border-2 border-emerald-500/50 text-emerald-400 border-dotted ";

  return (
    <span
      className={`${estilos} border text-[10px] font-black px-2 py-0.5 rounded uppercase`}
    >
      {tipo}
    </span>
  );
};

export default Etiqueta;
