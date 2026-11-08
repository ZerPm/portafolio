// Publica dist/ en la rama gh-pages.
// En Windows, la caché por defecto de gh-pages (node_modules/.cache) puede superar el límite
// de longitud de ruta; por eso se usa una carpeta corta en el directorio temporal del sistema.
import os from 'node:os';
import path from 'node:path';

process.env.CACHE_DIR ??= path.join(os.tmpdir(), 'ghp-portafolio');
const { publish } = await import('gh-pages');

await new Promise((resolve, reject) =>
  publish('dist', { dotfiles: true, message: 'Deploy portafolio' }, (err) => (err ? reject(err) : resolve()))
);
console.log('Publicado en https://zerpm.github.io/portafolio/');
