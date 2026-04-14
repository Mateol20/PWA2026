export const LocalStorage = (clave, elemento) => {
  let elementosPresentes = JSON.parse(localStorage.getItem(clave));
  if (Array.isArray(elementosPresentes)) {
    elementos.push(elemento);
  } else {
    elementosPresentes = [elemento];
  }
  localStorage.setItem(clave, JSON.stringify(elementosPresentes));
  return elemento;
};
