export const guardarEnLocalStorage = (clave, elementoNuevo) => {
  let elementosPresentes = JSON.parse(localStorage.getItem(clave));
  if (!Array.isArray(elementosPresentes)) {
    elementosPresentes = [];
  }
  elementosPresentes.push(elementoNuevo);
  localStorage.setItem(clave, JSON.stringify(elementosPresentes));

  return elementosPresentes;
};
