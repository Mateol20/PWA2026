import { render, screen } from '@testing-library/react';
import App from './App';

describe('Configuración de Test', () => {
  test('debe tener acceso a los matchers de jest-dom', () => {
    render(<App />);
    // Si esto no falla, jsdom y jest-dom están bien configurados
    expect(document.body).toBeInTheDocument();
  });
});