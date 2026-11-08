import './styles.css';
import { $, $$, reduced } from './core/util.js';
import { setupPointer, setupRipple } from './core/fx.js';
import { createRouter } from './core/router.js';
import { initScene } from './scene.js';
import home from './views/home.js';
import profileView from './views/profile.js';
import automations from './views/automations.js';
import certificationsView from './views/certifications.js';
import contact from './views/contact.js';

document.body.classList.add('is-loading');
$('#year').textContent = new Date().getFullYear();

const scene = initScene($('#bg'));
const routes = [home, profileView, automations(scene), certificationsView, contact];

/* ---------- navbar ---------- */
const nav = $('.nav');
const toggle = $('#nav-toggle');
const links = $('#nav-links');
const setOpen = (open) => {
  links.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
};
toggle.addEventListener('click', () => setOpen(!links.classList.contains('is-open')));
links.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });

const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle('is-scrolled', y > 20);
};
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- router ---------- */
const hudNum = $('#hud-num');
const hudLabel = $('#hud-label');
createRouter({
  routes,
  outlet: $('#view'),
  onChange: (route, i) => {
    $$('a[data-route]', links).forEach((a) => {
      const on = a.dataset.route === route.id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    hudNum.textContent = String(i + 1).padStart(2, '0');
    hudLabel.textContent = route.label;
    scene?.setMode(route.id === 'inicio' ? 'hero' : 'calm');
    onScroll();
  }
});

/* ---------- modal de flujos ---------- */
const dlg = $('#flow-modal');
$('#fm-close').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

setupPointer($('.glow'));
setupRipple();

/* ---------- intro ---------- */
const ready = () => {
  document.body.classList.add('is-ready');
  document.body.classList.remove('is-loading');
  setTimeout(() => $('.intro')?.remove(), 1400);
};
Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 1500))]).then(() => setTimeout(ready, reduced ? 0 : 600));
