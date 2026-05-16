import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import PaginaDeFavoritos from './PaginaDeFavoritos';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const mockFavoritos = vi.hoisted(() => vi.fn());

vi.mock('../../context/ContextoFavoritos', () => ({
  useFavoritos: () => mockFavoritos(),
}));

describe('PaginaDeFavoritos', () => {
  it('muestra mensaje cuando no hay favoritos', () => {
    mockFavoritos.mockReturnValue({ favoritos: [] });

    render(
      <MemoryRouter>
        <PaginaDeFavoritos />
      </MemoryRouter>
    );

    expect(screen.getByText('noFavoritos')).toBeInTheDocument();
    expect(screen.getByText('favoritos')).toBeInTheDocument();
  });

  it('muestra la grilla de favoritos cuando hay peliculas guardadas', () => {
    mockFavoritos.mockReturnValue({
      favoritos: [
        {
          imdbID: 'tt123',
          Title: 'Peli Favorita',
          Poster: '',
          Type: 'movie',
          Year: '2024',
        },
      ],
    });

    render(
      <MemoryRouter>
        <PaginaDeFavoritos />
      </MemoryRouter>
    );

    expect(screen.getByText('favoritos')).toBeInTheDocument();
    expect(screen.getByText('Peli Favorita')).toBeInTheDocument();
  });
});
