const productos = [];
let ultimoId = 0;

function crearProducto(data) {
  if (!data.sku || !data.nombre) {
    throw new Error('SKU y nombre son obligatorios');
  }
  const stockInicial = data.stock ?? 0;
  const nuevo = {
    id: ++ultimoId,
    sku: String(data.sku),
    nombre: String(data.nombre),
    stock: Number(stockInicial)
  };
  productos.push(nuevo);
  return nuevo;
}

function listarProductos() {
  return [...productos];
}

function resetProductos() {
  productos.length = 0;
  ultimoId = 0;
}

module.exports = {
  crearProducto,
  listarProductos,
  resetProductos
};
