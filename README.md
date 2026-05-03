# PWA2026

Proyecto de la materia **Programación Web y Aplicaciones** (2026).

## Integrantes

| Nombre            | Legajo  |
| ----------------- | ------- |
| Mateo Garcia (PM-TP1)     | FAI-4226|
| Ignacio Bonorino (PM-TP2) | FAI-4863|

## Estructura del repositorio

```
PWA2026/
├── TP1/          # Trabajo Práctico 1
├── TP2/          # Trabajo Práctico 2
└── README.md
```

## Trabajos Prácticos

### TP1 - Aplicación de Gestión de Películas

Aplicación React para gestión de películas con las siguientes funcionalidades:
- Barra de búsqueda
- Filtros por género
- Formulario de carga de películas
- Listado de películas vistas y no vistas
- Resumen de géneros

**Tech Stack:** React 19, Vite, ESLint

**Componentes principales:**
- `BarraBusqueda` - Input de búsqueda
- `Boton` / `BotonEstado` - Botones reutilizables
- `Filtro` / `FiltroGeneros` - Filtros de contenido
- `Formulario` / `InputComponent` - Formularios de carga
- `OcultarFormulario` - Toggle de visibilidad del formulario
- `PeliculasNoVistas` - Listado de películas pendientes
- `Titulo` - Header de sección

**Scripts disponibles:**
```bash
cd TP1
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Build de producción
npm run lint     # Ejecutar linter
npm run preview  # Preview del build
```

### TP2 - Catálogo de Películas con API

Aplicación React que consume una API de películas con scroll infinito.


## Descripción

Catálogo de películas con scroll infinito que consume una API externa para mostrar un listado de películas con sus detalles.

## Tech Stack

- **React 19** - Librería de UI
- **Vite** - Bundler y dev server
- **Tailwind CSS 4** - Framework de estilos
- **react-infinite-scroll-component** - Scroll infinito
- **ESLint** - Linter

**Componentes principales:**
- `TarjetaPelicula` - Card individual de película
- `ItemPelicula` - Item de listado
- `Footer` - Footer de la aplicación



### getAllMovies

Función que consume la API de películas con soporte de paginación y búsqueda:

```js
getAllMovies(page, limit, search)
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| page      | number   | Página a consultar            |
| limit     | number   | Cantidad de resultados        |
| search    | string   | Filtro por título (opcional)  |

**API:** `https://69e65c86ce4e908a155f6c79.mockapi.io/api/v1/pelicula`

**Scripts disponibles:**
```bash
cd TP2
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Build de producción
npm run lint     # Ejecutar linter
npm run preview  # Preview del build
```

## Guía de instalación

### Requisitos previos
- [Node.js](https://nodejs.org/) (v18 o superior)
- [Git](https://git-scm.com/)

### Paso a paso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Mateol20/PWA2026.git
   ```

2. **Abrir la carpeta del proyecto**
   ```bash
   cd PWA2026
   ```

3. **Instalar dependencias del TP que desees ejecutar**
   ```bash
   # Para TP1
   cd TP1
   npm install

   # Para TP2
   cd TP2
   npm install
   ```

4. **Crear una branch de trabajo**
   ```bash
   git checkout -b nombre-de-tu-rama
   ```

5. **Ejecutar el proyecto**
   ```bash
   npm run dev
   ```

## Flujo de trabajo con Git

1. **Crear y cambiar a una nueva rama**
   ```bash
   git checkout -b nombre-de-tu-rama
   ```

2. **Verificar rama actual**
   ```bash
   git branch
   ```

3. **Agregar cambios**
   ```bash
   git add .
   ```

4. **Commitear con mensaje descriptivo**
   ```bash
   git commit -m "Descripción clara de los cambios realizados"
   ```

5. **Subir la rama a GitHub**
   ```bash
   git push origin nombre-de-tu-rama
   ```

6. **Crear un Pull Request** desde la web de GitHub
