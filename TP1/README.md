# PWA2026

- Integrantes del grupo:

# Mateo Garcia FAI-4226

# Ignacio Bonorino FAI 4863

# Función de los siguientes archivos iniciales:

index.js: Carga el main.jsx
App.js: Se encarga de carga home.jsx, y elementos estaticos header y footer
index.css:
package.json: Se encarga de indicar los archivos necesarios para que el proyecto funcione.

# Guia de de instalación paso a paso:

1. Clonar el repositorio: en vscode abrir una consola y escribir el siguiente comando
   git clone https://github.com/Mateol20/PWA2026.git
2. Abrir la carpeta del proyecto
3. Ubicarnos sobre la carpeta del proyecto: Abrir una consola y escribir
   cd TP1 (por defecto deberiamos estar parados en PWA2026)
4. Instalar la carpeta node_modules: Abrimos una termina y ejecutamos
   npm_install (asegurarse estar parados en la carpeta TP1)
5. Crear una branch de trabajo (IMPORTANTE)
   Asegurarse de crear una nueva branch(rama) por cada nueva actualizacion a implementar, usandoe el comando:
   git checkout -b nombre-de-tu-rama
6. Prueba: Ejectuar el comando
   npm run dev Para asegurarse de que todo esta funcionando correctamente.

# PASOS DE GIT

CREAR LA BRANCH
git checkout -b nombre-de-tu-rama

1. Mira en qué rama estás (debería ser la que creaste)

git branch

2.  Agrega los cambios

git add .

3.  Crea el "paquete" con un mensaje

git commit -m "Agregado componente Titulo con estilos y renderizado en Home"

4.  Subir la rama a GitHub

git push origin NOMBRE_DE_TU_RAMA

5. Crea el Pull Request en la web
