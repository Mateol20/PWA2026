/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
"fondo-app": "#020617",  
    "fondo-card": "#1e293b",  
    "borde-card": "#334155",  
    "acento": "#3b82f6",
      }

    },
  },
  plugins: [],
};
