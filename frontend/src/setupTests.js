import { vi } from 'vitest';

// Mock global de fetch para evitar llamadas reales a la API durante las pruebas
vi.stubGlobal('fetch', vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: [] })
  })
));
