# inventario-ci-cd
Estudiante: Vera Lopez Alex Gabriel
Práctica de CI/CD — Carrera de Software, Universidad de Guayaquil
Unidad 1: Gestión de la Configuración del Software

## Tecnologías

| Capa | Stack |
|---|---|
| Backend | Node.js + Express 4 |
| Frontend | React 18 + Vite 6 |
| Pruebas backend | Jest + Supertest |
| Pruebas frontend | Vitest + Testing Library |
| Gestor de paquetes | pnpm |
| CI/CD | GitHub Actions |

## Estructura

```
inventario-ci-cd/
├── backend/
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── app.test.js
│       ├── inventoryService.js
│       ├── inventoryService.test.js
│       └── server.js
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       ├── App.test.jsx
│       ├── index.css
│       ├── main.jsx
│       └── setupTests.js
└── .github/
    └── workflows/
        ├── ci-backend.yml
        ├── ci-frontend.yml
        └── deploy.yml
```

## Ejecución local

### Backend
```bash
cd backend
pnpm install
pnpm start        # Servidor en http://localhost:3000
pnpm test         # Ejecutar pruebas
```

### Frontend
```bash
cd frontend
pnpm install
pnpm run dev      # App en http://localhost:5173
pnpm test -- --run  # Ejecutar pruebas
```

## CI/CD (GitHub Actions)

- **CI Backend** → se ejecuta en cada `push` / `pull_request` a `main`
- **CI Frontend** → se ejecuta en cada `push` / `pull_request` a `main`
- **Deploy (Simulado)** → se ejecuta cuando ambos CI pasan exitosamente

## Por qué pnpm

Se usa `pnpm` en lugar de `npm` por seguridad y eficiencia:
- Aislamiento estricto de dependencias (sin *phantom dependencies*)
- Almacén central con verificación por hash de contenido
- `--frozen-lockfile` en CI garantiza reproducibilidad exacta
- Más rápido que npm gracias al cache por contenido
