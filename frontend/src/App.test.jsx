import { render, screen, act } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('muestra el título de la aplicación', async () => {
    await act(async () => { render(<App />); });
    const titulo = screen.getByText(/Inventario Web \(Demo\)/i);
    expect(titulo).toBeDefined();
  });

  it('muestra el formulario de creación', async () => {
    await act(async () => { render(<App />); });
    expect(screen.getByLabelText(/SKU/i)).toBeDefined();
    expect(screen.getByLabelText(/Nombre/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /crear producto/i })).toBeDefined();
  });

  it('muestra mensaje cuando no hay productos', async () => {
    await act(async () => { render(<App />); });
    expect(screen.getByText(/No hay productos registrados/i)).toBeDefined();
  });
});
