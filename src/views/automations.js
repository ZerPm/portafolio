import { flows, nodeKinds } from '../data.js';
import { esc, viewHead, paintIcons, withTransition, $ } from '../core/util.js';

const tones = [
  ['trigger', 'Disparador'], ['io', 'Integración / E-S'], ['logic', 'Lógica y código'],
  ['ai', 'IA generativa'], ['data', 'Base de datos'], ['auth', 'Seguridad'], ['out', 'Salida / notificación']
];

const card = (f, i) => {
  const trig = nodeKinds[f.trigger.kind];
  const pipe = f.nodes.map((n, k) => {
    const kind = nodeKinds[n.kind];
    const edge = k < f.nodes.length - 1 ? `<span class="pipe__edge" style="--i:${(k * 0.18).toFixed(2)}s"></span>` : '';
    return `<span class="pipe__node tone-${kind.tone}" title="${esc(n.name)} · ${esc(kind.label)}"><i data-lucide="${kind.icon}"></i></span>${edge}`;
  }).join('');
  return `
    <button class="flow card glass tilt reveal" style="--d:${(i % 2) * 0.1}s" data-flow="${f.id}" aria-haspopup="dialog">
      <div class="flow__top">
        <span class="flow__icon"><i data-lucide="${f.icon}"></i></span>
        <span class="flow__cat">${esc(f.category)}</span>
      </div>
      <h2 class="flow__title">${esc(f.title)}</h2>
      <span class="trigger"><i data-lucide="${trig.icon}"></i> ${esc(f.trigger.text)}</span>
      <div class="pipe" aria-label="${f.nodes.length} nodos">${pipe}</div>
      <p class="flow__value">${esc(f.value)}</p>
      <div class="flow__impact">${f.impact.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
      <span class="flow__more">Ver ${f.nodes.length} nodos del pipeline <i data-lucide="arrow-right"></i></span>
    </button>`;
};

const detail = (f) => {
  const trig = nodeKinds[f.trigger.kind];
  return `
    <div class="fm-head">
      <span class="flow__icon"><i data-lucide="${f.icon}"></i></span>
      <div><span class="flow__cat">${esc(f.category)}</span><h3 id="fm-title">${esc(f.title)}</h3></div>
    </div>
    <span class="trigger"><i data-lucide="${trig.icon}"></i> Trigger · ${esc(f.trigger.text)}</span>
    <p class="fm-value">${esc(f.value)}</p>
    <div class="flow__impact" style="margin-bottom:26px">${f.impact.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
    <h4 class="card__label"><i data-lucide="workflow"></i> Pipeline · ${f.nodes.length} nodos</h4>
    <ol class="fm-steps">
      ${f.nodes.map((n, i) => {
        const k = nodeKinds[n.kind];
        return `<li class="fm-step tone-${k.tone}" style="--i:${i}">
          <span class="pipe__node"><i data-lucide="${k.icon}"></i></span>
          <div><span class="kind">${String(i + 1).padStart(2, '0')} · ${esc(k.label)}</span><b>${esc(n.name)}</b><p>${esc(n.desc)}</p></div>
        </li>`;
      }).join('')}
    </ol>`;
};

export default function automations(scene) {
  return {
    id: 'automatizaciones',
    label: 'Automatizaciones n8n',
    render: () => `
      <section class="section">
        <div class="container">
          ${viewHead('03 · Automatizaciones n8n', 'Automatizaciones de negocio', 'Flujos n8n que diseñé y opero. Cada uno muestra su disparador, sus nodos y el valor operativo que entrega. Haz clic para ver el pipeline completo.')}
          <div class="legend reveal">${tones.map(([t, l]) => `<span class="tone-${t}"><i></i>${l}</span>`).join('')}</div>
          <div class="flows">${flows.map(card).join('')}</div>

          <div class="ecosystem card glass reveal">
            <h2 class="card__label"><i data-lucide="network"></i> Ciclo de conocimiento encadenado</h2>
            <div class="eco">
              <div class="eco__step"><i data-lucide="hard-drive"></i><span>Grabación en Meet</span></div>
              <div class="eco__link"></div>
              <div class="eco__step"><i data-lucide="sparkles"></i><span>IA documenta</span></div>
              <div class="eco__link"></div>
              <div class="eco__step"><i data-lucide="book-open"></i><span>Página en Confluence</span></div>
              <div class="eco__link"></div>
              <div class="eco__step"><i data-lucide="message-square"></i><span>Aviso en Google Chat</span></div>
            </div>
            <p class="muted">Dos flujos se encadenan: la documentación automática de capacitaciones publica en Confluence y ese evento dispara el aviso a la comunidad.</p>
          </div>
        </div>
      </section>`,
    mount: (root) => {
      const dlg = $('#flow-modal');
      const body = $('#fm-body');
      const onClick = (e) => {
        const c = e.target.closest('[data-flow]');
        if (!c) return;
        const f = flows.find((x) => x.id === c.dataset.flow);
        body.innerHTML = detail(f);
        paintIcons();
        withTransition(() => dlg.showModal());
        scene?.pulse();
      };
      root.addEventListener('click', onClick);
      return () => { root.removeEventListener('click', onClick); if (dlg.open) dlg.close(); };
    }
  };
}
