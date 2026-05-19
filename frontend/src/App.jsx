import { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:3000/api/productos';

function App() {
  const [productos, setProductos] = useState([]);
  const [sku, setSku] = useState('');
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  // Cargar productos al inicio
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setProductos(json.data ?? []))
      .catch((err) => console.error('Error cargando productos', err));
  }, []);

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setCargando(true);
    try {
      const resp = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sku, nombre }),
      });
      if (resp.ok) {
        const json = await resp.json();
        setProductos((prev) => [...prev, json.data]);
        setSku('');
        setNombre('');
      } else {
        const json = await resp.json();
        setError(json.message || 'Error al crear producto');
      }
    } catch {
      setError('No se pudo conectar con el servidor');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="container">
      <h1>Inventario Web (Demo)</h1>

      <section className="form-section">
        <h2>Agregar producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="sku">SKU:</label>
            <input
              id="sku"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              placeholder="A-001"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="nombre">Nombre:</label>
            <input
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Cable HDMI"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={cargando}>
            {cargando ? 'Guardando...' : 'Crear producto'}
          </button>
        </form>
      </section>

      <hr />

      <section>
        <h2>Productos actuales</h2>
        {productos.length === 0 ? (
          <p className="empty">No hay productos registrados.</p>
        ) : (
          <ul>
            {productos.map((p) => (
              <li key={p.id}>
                <span className="sku">{p.sku}</span> — {p.nombre}{' '}
                <span className="stock">(stock: {p.stock})</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
