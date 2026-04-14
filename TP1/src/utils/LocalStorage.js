// src/utils/localstorage.js
export const guardarEnLocalStorage = (clave, elementoNuevo) => {
  // 1. Buscamos lo que ya hay
  let elementosPresentes = JSON.parse(localStorage.getItem(clave));

  // 2. Verificamos si es un array, si no, creamos uno nuevo
  if (!Array.isArray(elementosPresentes)) {
    elementosPresentes = [];
  }

  // 3. Agregamos el nuevo objeto al array
  elementosPresentes.push(elementoNuevo);

  // 4. Guardamos el array actualizado como string
  localStorage.setItem(clave, JSON.stringify(elementosPresentes));

  return elementosPresentes;
};
