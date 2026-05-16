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
- Vitest
- React Testing Library
- jest-dom
- user-event

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

## Testing

El proyecto incluye tests automáticos utilizando **Vitest** y **React Testing Library**.

### Librerías instaladas para testing

| Librería | Propósito |
|----------|-----------|
| `vitest` | Corredor de tests |
| `@testing-library/react` | Renderizado de componentes en tests |
| `@testing-library/jest-dom` | Matchers adicionales (toHaveTextContent, toBeInTheDocument, etc.) |
| `@testing-library/user-event` | Simulación de eventos de usuario |
| `jsdom` | Entorno de navegador simulado |

### Cómo ejecutar los tests

```bash
cd TP2
npm run test        # Ejecutar en modo watch
npm run test:run    # Ejecutar una sola vez
```

### Estructura de tests

```
src/
├── Components/
│   ├── Etiqueta/Etiqueta.test.jsx
│   ├── Header/Header.test.jsx
│   ├── Footer/Footer.test.jsx
│   ├── ItemPelicula/ItemPelicula.test.jsx
│   └── TarjetaPelicula/TarjetaPelicula.test.jsx
├── pages/
│   ├── Home/Home.test.jsx
│   ├── DetallePelicula/DetallePelicula.test.jsx
│   └── Favoritos/PaginaDeFavoritos.test.jsx
└── services/
    ├── obtenerTodasLasPeliculas.test.js
    └── obtenerPeliculaPorId.test.js
```

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
