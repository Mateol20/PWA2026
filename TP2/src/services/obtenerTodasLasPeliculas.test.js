import { describe, it, expect, vi, beforeEach } from 'vitest';
import { obtenerTodasLasPeliculas } from './obtenerTodasLasPeliculas';
import { API_BASE_URL, ITEMS_PER_PAGE } from '../config';

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('obtenerTodasLasPeliculas', () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  it('construye la URL correcta con pagina y limite', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    });

    await obtenerTodasLasPeliculas(1);

    const url = new URL(mockFetch.mock.calls[0][0]);
    expect(url.origin + url.pathname).toBe(API_BASE_URL);
    expect(url.searchParams.get('page')).toBe('1');
    expect(url.searchParams.get('limit')).toBe(ITEMS_PER_PAGE.toString());
  });

  it('agrega el parametro de busqueda cuando se proporciona', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    });

    await obtenerTodasLasPeliculas(1, 'Inception');

    const url = new URL(mockFetch.mock.calls[0][0]);
    expect(url.searchParams.get('search')).toBe('Inception');
  });

  it('retorna arreglo vacio en respuesta 404', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 404,
      json: () => Promise.resolve(),
    });

    const resultado = await obtenerTodasLasPeliculas(1);
    expect(resultado).toEqual([]);
  });

  it('retorna arreglo vacio en caso de error de red', async () => {
    mockFetch.mockRejectedValue(new Error('Error de red'));

    const resultado = await obtenerTodasLasPeliculas(1);
    expect(resultado).toEqual([]);
  });

  it('retorna los datos cuando la respuesta es exitosa', async () => {
    const datosMock = [{ imdbID: 'tt123', Title: 'Test' }];
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(datosMock),
    });

    const resultado = await obtenerTodasLasPeliculas(1);
    expect(resultado).toEqual(datosMock);
  });

  it('retorna arreglo vacio si la respuesta no es un arreglo', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ no: 'arreglo' }),
    });

    const resultado = await obtenerTodasLasPeliculas(1);
    expect(resultado).toEqual([]);
  });
});
