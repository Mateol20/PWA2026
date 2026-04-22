import React from "react";
import { createRoot } from "react-dom/client"; // <--- ESTA ES LA LÍNEA CLAVE
import App from "./App.jsx";
import "./index.css"; // Aquí es donde vive Tailwind

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
