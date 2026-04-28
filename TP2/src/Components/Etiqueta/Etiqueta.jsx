import React from 'react'

const Etiqueta = ({ tipo }) => {
  const esPeli = tipo === 'pelicula';
  const estilos = esPeli 
    ? "bg-red-500/10 border border-red-500/50 text-red-500" 
    : "bg-emerald-950/30 border border-emerald-500/50 text-emerald-400 ";

  return (
    <span className={`${estilos} border text-[10px] font-black px-2 py-0.5 rounded uppercase`}>
      {tipo}
    </span>
  );
};

export default Etiqueta