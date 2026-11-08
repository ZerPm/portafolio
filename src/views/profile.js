import { profile, experience, skills, education, languages } from '../data.js';
import { esc, viewHead, $$ } from '../core/util.js';

const focus = [
  {
    icon: 'clipboard-list',
    title: 'Análisis funcional',
    items: [
      'Levantamiento y relevamiento de requerimientos con negocio y TI.',
      'DEF, historias de usuario, criterios de aceptación y wireframes.',
      'Diagramas de secuencia, modelado de procesos y reglas de negocio.',
      'Especificación de integraciones: APIs REST, OCR y WhatsApp.'
    ]
  },
  {
    icon: 'headset',
    title: 'Soporte N3',
    items: [
      'Soporte en pases a producción y validación de entregables.',
      'Atención y análisis de incidentes con equipos de desarrollo.',
      'Pruebas funcionales, UAT y matrices de prueba.',
      'Control de cambios y trazabilidad end-to-end del requerimiento.'
    ]
  }
];

const subnav = [
  ['enfoque', 'Enfoque'],
  ['experiencia', 'Experiencia'],
  ['habilidades', 'Habilidades'],
  ['formacion', 'Formación']
];

export default {
  id: 'perfil',
  label: 'Mi perfil',
  render: () => `
    <section class="section">
      <div class="container">
        ${viewHead('02 · Mi perfil', 'Soporte N3 y Funcional', 'Analista funcional con mentalidad de ingeniería y de operación.')}

        <nav class="subnav reveal" aria-label="Secciones del perfil">
          ${subnav.map(([id, l]) => `<button type="button" class="chip" data-jump="${id}">${l}</button>`).join('')}
        </nav>

        <div class="profile reveal">
          <div class="profile__text">
            <p>${esc(profile.summary)}</p>
            <p>${esc(profile.summary2)}</p>
          </div>
        </div>

        <section class="block" id="enfoque" aria-labelledby="h-enfoque">
          <h2 class="block__title" id="h-enfoque">Enfoque</h2>
          <div class="focus">
            ${focus.map((f, i) => `
              <article class="card glass tilt reveal" style="--d:${i * 0.1}s">
                <h3 class="focus__title"><span class="ico"><i data-lucide="${f.icon}"></i></span>${esc(f.title)}</h3>
                <ul class="tl-tasks">${f.items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
              </article>`).join('')}
          </div>
        </section>

        <section class="block" id="experiencia" aria-labelledby="h-exp">
          <h2 class="block__title" id="h-exp">Experiencia</h2>
          <ol class="timeline" id="timeline">
            ${experience.map((x) => `
              <li class="tl-item reveal">
                <article class="card glass tilt">
                  <div class="tl-meta">
                    <span class="period">${esc(x.period)}</span>
                    <h3>${esc(x.company)}</h3>
                    ${x.via ? `<span class="via">${esc(x.via)}</span>` : ''}
                  </div>
                  <div>
                    <div class="tl-role">${esc(x.role)} ${x.current ? '<span class="badge">Actual</span>' : ''}</div>
                    <ul class="tl-tasks">${x.tasks.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
                  </div>
                </article>
              </li>`).join('')}
          </ol>
        </section>

        <section class="block" id="habilidades" aria-labelledby="h-skills">
          <h2 class="block__title" id="h-skills">Habilidades</h2>
          <div class="skills">
            ${skills.map((s, i) => `
              <article class="skill card glass tilt reveal" style="--d:${(i % 3) * 0.08}s">
                <h3><span class="ico"><i data-lucide="${s.icon}"></i></span>${esc(s.title)}</h3>
                <div class="tags">${s.items.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
              </article>`).join('')}
          </div>
        </section>

        <section class="block" id="formacion" aria-labelledby="h-edu">
          <h2 class="block__title" id="h-edu">Formación e idiomas</h2>
          <div class="focus">
            <div class="card glass tilt reveal">
              <h3 class="card__label"><i data-lucide="graduation-cap"></i> Educación</h3>
              <ul class="edu">${education.map((e) => `<li><b>${esc(e.title)}</b><span>${esc(e.place)}</span><br><em>${esc(e.note)}</em></li>`).join('')}</ul>
            </div>
            <div class="card glass tilt reveal">
              <h3 class="card__label"><i data-lucide="languages"></i> Idiomas</h3>
              <ul class="langs">${languages.map((l) => `<li><div class="row"><span>${esc(l.name)}</span><span class="muted">${esc(l.level)}</span></div><div class="bar"><i style="--w:${l.pct}%"></i></div></li>`).join('')}</ul>
            </div>
          </div>
        </section>
      </div>
    </section>`,
  mount: (root) => {
    // sub-navegación con desplazamiento suave (sin tocar el hash del router)
    const onJump = (e) => {
      const b = e.target.closest('[data-jump]');
      if (b) root.querySelector(`#${b.dataset.jump}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    root.addEventListener('click', onJump);

    const chips = $$('[data-jump]', root);
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) chips.forEach((c) => c.classList.toggle('is-active', c.dataset.jump === e.target.id));
    }), { rootMargin: '-40% 0px -55% 0px' });
    subnav.forEach(([id]) => io.observe(root.querySelector(`#${id}`)));

    const tl = root.querySelector('#timeline');
    const onScroll = () => {
      const r = tl.getBoundingClientRect();
      tl.style.setProperty('--tl', `${Math.min(Math.max((window.innerHeight * 0.6 - r.top) / r.height, 0), 1) * 100}%`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => { root.removeEventListener('click', onJump); io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }
};
