const { crearProducto, listarProductos, resetProductos } = require('./inventoryService');

beforeEach(() => {
  resetProductos();
});

test('crea un producto válido con stock inicial 0 si no se define', () => {
  const prod = crearProducto({ sku: 'A-001', nombre: 'Cable HDMI' });
  expect(prod.id).toBe(1);
  expect(prod.sku).toBe('A-001');
  expect(prod.nombre).toBe('Cable HDMI');
  expect(prod.stock).toBe(0);
});

test('crea un producto con stock definido', () => {
  const prod = crearProducto({ sku: 'A-002', nombre: 'Mouse', stock: 10 });
  expect(prod.stock).toBe(10);
});

test('lanza error si falta nombre', () => {
  expect(() => crearProducto({ sku: 'A-003' }))
    .toThrow('SKU y nombre son obligatorios');
});

test('lanza error si falta sku', () => {
  expect(() => crearProducto({ nombre: 'Teclado' }))
    .toThrow('SKU y nombre son obligatorios');
});

test('listarProductos retorna todos los productos', () => {
  crearProducto({ sku: 'A-001', nombre: 'Monitor' });
  crearProducto({ sku: 'A-002', nombre: 'Audífonos' });
  const lista = listarProductos();
  expect(lista).toHaveLength(2);
});
