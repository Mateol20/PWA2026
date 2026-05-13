import {render, screen} from '@testing-library/react';
import Etiqueta from './Etiqueta';
describe ('Etiqueta', () => {
    it('muestra la etiqueta para pelicula', () => {
        render(<Etiqueta tipo="pelicula" />);
        const etiquetaElement = screen.getByText(/pelicula/i);
        expect(etiquetaElement).toBeInTheDocument();
    });
    it('muestra la etiqueta para serie', () => {
        render(<Etiqueta tipo="serie" />);
        const etiquetaElement = screen.getByText(/serie/i);
        expect(etiquetaElement).toBeInTheDocument();
    });
    it('debe mostrar color rojo cuando es pelicula'), () => {
        render(<Etiqueta tipo="pelicula" />);
        const etiquetaElement = screen.getByText(/pelicula/i);
        expect(etiquetaElement).toHaveClass('text-red-500');
    }
        it('debe mostrar color verde cuando es serie'), () => {
            render(<Etiqueta tipo="serie" />);
            const etiquetaElement = screen.getByText(/serie/i);
            expect(etiquetaElement).toHaveClass('text-emerald-400');
        }
})