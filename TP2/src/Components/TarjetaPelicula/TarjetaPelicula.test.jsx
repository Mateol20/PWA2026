import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import { describe, it, expect, vi } from 'vitest';
import TarjetaPelicula from './TarjetaPelicula';
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

vi.mock('../../context/ContextoFavoritos.jsx', () => ({
  useFavoritos: () => ({
    alternarFavorito: vi.fn(),
    esFavorito: vi.fn(() => false),
  }),
}));

describe('TarjetaPelicula', () => {
    it('muestra mensaje de carga cuando no hay datos', () => {
        render(
            <MemoryRouter>
                <TarjetaPelicula datos={[]} />
            </MemoryRouter>
        );
        const mensajeCarga = screen.getByText(/cargando/i);
        expect(mensajeCarga).toBeInTheDocument();
    });

    it('renderiza correctamente las películas', () => {
        const peliculasMock = [
            { 
                imdbID: 'tt123', 
                Title: 'Película de Prueba 1', 
                Poster: 'https://foto.com/1.jpg',
                Type: 'movie',
                Year: '2024'
            }
        ];

        render(
            <MemoryRouter>
                <TarjetaPelicula datos={peliculasMock} />
            </MemoryRouter>
        );
        
        const pelicula1 = screen.getByText(/película de prueba 1/i);
        expect(pelicula1).toBeInTheDocument();
    });
});