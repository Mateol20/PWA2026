import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import DetallePelicula from './DetallePelicula';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

vi.mock('../../context/ContextoFavoritos', () => ({
  useFavoritos: () => ({
    alternarFavorito: vi.fn(),
    esFavorito: vi.fn(() => false),
  }),
}));

const renderConRuta = (imdbID) => {
  return render(
    <MemoryRouter initialEntries={[`/pelicula/${imdbID}`]}>
      <Routes>
        <Route path="/pelicula/:imdbID" element={<DetallePelicula />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('DetallePelicula', () => {
  it('muestra el estado de carga inicialmente', () => {
    renderConRuta('tt123456');
    expect(screen.getByText('cargandoPelicula')).toBeInTheDocument();
  });
});
