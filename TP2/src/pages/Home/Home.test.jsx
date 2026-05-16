import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Inicio from './Home';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

vi.mock('../../services/obtenerTodasLasPeliculas', () => ({
  obtenerTodasLasPeliculas: vi.fn().mockResolvedValue([]),
}));

vi.mock('../../context/ContextoBusqueda', () => ({
  useBusqueda: () => ({ termino: '' }),
  ProveedorBusqueda: ({ children }) => <>{children}</>,
}));

vi.mock('../../context/ContextoFavoritos', () => ({
  useFavoritos: () => ({
    alternarFavorito: vi.fn(),
    esFavorito: vi.fn(() => false),
  }),
}));

vi.mock('react-infinite-scroll-hook', () => ({
  default: () => [null],
}));

describe('Inicio', () => {
  it('muestra el titulo de la pagina', async () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('cartelera')).toBeInTheDocument();
    });
  });
});
