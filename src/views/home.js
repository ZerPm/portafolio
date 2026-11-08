import { stats, rotatingRoles, flows, certifications } from '../data.js';
import { esc } from '../core/util.js';
import { startScramble } from '../core/fx.js';

const shortcuts = [
  { href: '#/perfil', icon: 'headset', title: 'Mi perfil', text: 'Análisis funcional, soporte N3, experiencia y habilidades.' },
  { href: '#/automatizaciones', icon: 'workflow', title: 'Automatizaciones n8n', text: `${flows.length} flujos en producción con triggers, nodos y valor operativo.` },
  { href: '#/certificaciones', icon: 'award', title: 'Certificaciones', text: `${certifications.length} credenciales con enlace de verificación.` }
];

export default {
  id: 'inicio',
  label: 'Inicio',
  title: 'Christian Manco · Analista Funcional & Soporte N3',
  render: () => `
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero__inner">
        <p class="eyebrow reveal"><span class="pulse-dot"></span> Disponible para nuevos proyectos · Lima, Perú</p>
        <h1 class="hero__title" id="hero-title" tabindex="-1">
          <span class="line"><span class="line__in">Christian</span></span>
          <span class="line"><span class="line__in grad">Manco</span></span>
        </h1>
        <p class="hero__role reveal"><span class="mono">&gt;</span> <span id="role-scramble">${esc(rotatingRoles[0])}</span><span class="caret"></span></p>
        <p class="hero__lead reveal">
          Traduzco necesidades de negocio en soluciones trazables: desde el requerimiento y la especificación funcional hasta el pase a producción, el soporte N3 y la automatización de procesos con n8n e IA.
        </p>
        <div class="hero__actions reveal">
          <a class="btn btn--primary ripple" href="#/automatizaciones" data-magnetic><i data-lucide="workflow"></i> Ver automatizaciones</a>
          <a class="btn btn--ghost ripple" href="#/contacto" data-magnetic><i data-lucide="send"></i> Contactar</a>
        </div>
        <ul class="stats reveal">
          ${stats.map((s) => `<li><b data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</b><span>${esc(s.label)}</span></li>`).join('')}
        </ul>
      </div>
    </section>
    <section class="section section--tight" aria-label="Accesos rápidos">
      <div class="container shortcuts">
        ${shortcuts.map((s, i) => `
          <a class="shortcut card glass tilt reveal" href="${s.href}" style="--d:${i * 0.08}s">
            <span class="flow__icon"><i data-lucide="${s.icon}"></i></span>
            <h2>${esc(s.title)}</h2>
            <p>${esc(s.text)}</p>
            <span class="flow__more">Abrir <i data-lucide="arrow-right"></i></span>
          </a>`).join('')}
      </div>
    </section>`,
  mount: (root) => {
    requestAnimationFrame(() => root.querySelector('.hero')?.classList.add('is-on'));
    return startScramble(root.querySelector('#role-scramble'), rotatingRoles);
  }
};
