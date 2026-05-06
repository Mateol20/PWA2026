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

# TP2 - Gestor de Películas (OMDb API)

Aplicación web de página única (SPA) desarrollada en React que permite buscar, visualizar y gestionar películas utilizando la API de OMDb. Incluye scroll infinito, traducción a español/inglés, y gestión de favoritos persistente.

**Desarrollado por:**

- Mateo Garcia (FAI-4226)
- Ignacio Bonorino (FAI-4863)

## Características

- ♾️ **Scroll infinito**: Carga automática de resultados usando `react-infinite-scroll-hook`.
- ❤️ **Favoritos globales**: Sincronización instantánea entre vistas con persistencia en `localStorage`.
- 🌐 **Multi-idioma**: Soporte para Español e Inglés (`i18next`).
- 📱 **Responsive**: Diseño adaptable con Tailwind CSS.

## Tecnologías

- React 19 + Vite
- Tailwind CSS
- React Router DOM
- i18next
- react-infinite-scroll-hook
- OMDb API

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone <URL_DEL_REPO>
   cd TP2
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

## Estructura del Proyecto

```
TP2/
├── services/
│   ├── getAllMovies.js          # Función para obtener lista de películas
│   └── getMovieById.js          # Función para obtener detalle de una película
├── src/
│   ├── Components/
│   │   ├── Header/              # Barra de navegación y búsqueda
│   │   ├── Footer/              # Pie de página
│   │   ├── TarjetaPelicula/     # Grid contenedor de películas
│   │   └── ItemPelicula/        # Tarjeta individual de película
│   ├── context/
│   │   ├── ContextoFavoritos.jsx # Estado global de favoritos
│   │   ├── ContextoBusqueda.jsx  # Estado global de búsqueda
│   │   ├── i18n.js               # Configuración de idiomas
│   │   └── locales/              # Archivos JSON (es.json, en.json)
│   ├── pages/
│   │   ├── Home/                 # Página principal con scroll infinito
│   │   ├── DetallePelicula/      # Vista de información detallada
│   │   └── Favoritos/            # Lista de películas guardadas
│   ├── App.jsx                   # Rutas y configuración principal
│   └── main.jsx                  # Punto de entrada
└── README.md
```
