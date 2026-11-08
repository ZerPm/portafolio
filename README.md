# Portafolio · Christian Manco

Portafolio interactivo de Analista Funcional & Soporte N3.

**Sitio:** https://zerpm.github.io/portafolio/

- **Stack:** Vite, JavaScript modular, Three.js (fondo 3D reactivo al cursor y al scroll), Lucide (íconos), CSS moderno con View Transitions.
- **Arquitectura:** router por hash (`src/core/router.js`) y una vista por módulo en `src/views/` (inicio, perfil, automatizaciones, certificaciones, contacto).
- **Contenido:** perfil, experiencia, habilidades, flujos de automatización n8n (trigger, nodos y valor operativo) y certificaciones con enlace de verificación extraído de la capa de anotaciones URI del CV en PDF.
- Los datos viven en `src/data.js`. Los flujos n8n se describen a nivel funcional, sin credenciales ni endpoints internos.

## Scripts

```bash
npm install
npm run dev      # desarrollo
npm run build    # compila en dist/
npm run deploy   # compila y publica dist/ en la rama gh-pages
```
