import { describe, it, expect, vi, beforeEach } from 'vitest';
import { obtenerPeliculaPorId } from './obtenerPeliculaPorId';
import { API_BASE_URL } from '../config';

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('obtenerPeliculaPorId', () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  it('construye la URL correcta con el imdbID', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    });

    await obtenerPeliculaPorId('tt123456');

    const url = new URL(mockFetch.mock.calls[0][0]);
    expect(url.origin + url.pathname).toBe(API_BASE_URL);
    expect(url.searchParams.get('search')).toBe('tt123456');
  });

  it('retorna null en respuesta 404', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 404,
      json: () => Promise.resolve(),
    });

    const resultado = await obtenerPeliculaPorId('tt123456');
    expect(resultado).toBeNull();
  });

  it('retorna null en caso de error de red', async () => {
    mockFetch.mockRejectedValue(new Error('Error de red'));

    const resultado = await obtenerPeliculaPorId('tt123456');
    expect(resultado).toBeNull();
  });

  it('encuentra y retorna la pelicula por su imdbID', async () => {
    const datosMock = [
      { imdbID: 'tt111', Title: 'Otra Peli' },
      { imdbID: 'tt123456', Title: 'Peli Buscada' },
      { imdbID: 'tt999', Title: 'Otra Mas' },
    ];
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(datosMock),
    });

    const resultado = await obtenerPeliculaPorId('tt123456');
    expect(resultado).toEqual({ imdbID: 'tt123456', Title: 'Peli Buscada' });
  });

  it('retorna null si el imdbID no existe en los resultados', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([{ imdbID: 'tt111' }, { imdbID: 'tt999' }]),
    });

    const resultado = await obtenerPeliculaPorId('tt000000');
    expect(resultado).toBeNull();
  });

  it('retorna null si la respuesta no es un arreglo', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ no: 'arreglo' }),
    });

    const resultado = await obtenerPeliculaPorId('tt123456');
    expect(resultado).toBeNull();
  });
});
