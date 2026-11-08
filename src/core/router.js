import { $, paintIcons, withTransition } from './util.js';
import { observeReveals } from './fx.js';

/**
 * Router por hash (#/vista): funciona en GitHub Pages sin configurar el servidor.
 * Cada ruta es un componente { id, label, title, render(): string, mount?(root): cleanup }.
 */
export function createRouter({ routes, outlet, onChange }) {
  let current = null;
  let cleanup = null;

  const resolve = () => {
    const id = location.hash.replace(/^#\/?/, '').split(/[/?]/)[0] || routes[0].id;
    return routes.find((r) => r.id === id) || routes[0];
  };

  const swap = (route) => {
    cleanup?.();
    outlet.innerHTML = route.render();
    outlet.dataset.view = route.id;
    document.body.dataset.view = route.id;
    window.scrollTo({ top: 0, behavior: 'instant' });
    paintIcons();
    observeReveals(outlet);
    cleanup = route.mount?.(outlet) || null;
    document.title = route.id === routes[0].id ? route.title : `${route.label} · Christian Manco`;
    current = route;
    onChange?.(route, routes.indexOf(route));
  };

  const go = () => {
    const route = resolve();
    if (route === current) return;
    const first = !current;
    const t = first ? swap(route) : withTransition(() => swap(route));
    // al entrar a una vista nueva, el foco va a su título (accesibilidad)
    Promise.resolve(t?.finished).then(() => { if (!first) $('h1', outlet)?.focus({ preventScroll: true }); });
  };

  window.addEventListener('hashchange', go);
  go();
  return { get current() { return current; } };
}
