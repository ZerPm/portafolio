import { profile } from '../data.js';
import { esc, viewHead } from '../core/util.js';

const channels = [
  {
    id: 'linkedin', icon: 'linkedin', label: 'LinkedIn', value: '/in/christianpmanco',
    href: profile.linkedin, cta: 'Ver perfil', external: true, tone: '#38bdf8'
  },
  {
    id: 'email', icon: 'mail', label: 'Correo electrónico', value: profile.email,
    href: `mailto:${profile.email}`, cta: 'Escribir correo', external: false, tone: '#22f5a6', copy: profile.email
  },
  {
    id: 'github', icon: 'github', label: 'GitHub', value: `@${profile.githubUser}`,
    href: profile.github, cta: 'Ver repositorios', external: true, tone: '#a78bfa'
  }
];

export default {
  id: 'contacto',
  label: 'Contacto',
  render: () => `
    <section class="section contact">
      <div class="container">
        ${viewHead('05 · Contacto', '¿Conversamos?', 'Análisis funcional, soporte de producción o automatización de un proceso: cuéntame qué necesitas.')}
        <div class="contact__grid">
          ${channels.map((c, i) => `
            <article class="contact__card card glass reveal" style="--d:${i * 0.08}s; --tone:${c.tone}">
              <span class="contact__icon"><i data-lucide="${c.icon}"></i></span>
              <span class="contact__k">${esc(c.label)}</span>
              <span class="contact__v">${esc(c.value)}</span>
              <div class="contact__actions">
                <a class="btn btn--channel ripple" href="${esc(c.href)}" data-magnetic data-channel="${c.id}"
                  ${c.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                  ${esc(c.cta)} <i data-lucide="arrow-up-right"></i>
                </a>
                ${c.copy ? `<button type="button" class="btn btn--icon ripple" data-copy="${esc(c.copy)}" aria-label="Copiar correo"><i data-lucide="copy"></i></button>` : ''}
              </div>
            </article>`).join('')}
        </div>
        <p class="contact__note reveal muted" aria-live="polite" id="copy-status">Respondo en menos de 24 horas hábiles · Lima, Perú (GMT-5)</p>
      </div>
    </section>`,
  mount: (root) => {
    const status = root.querySelector('#copy-status');
    const original = status.textContent;
    let t;
    const onClick = async (e) => {
      const b = e.target.closest('[data-copy]');
      if (!b) return;
      try {
        await navigator.clipboard.writeText(b.dataset.copy);
        status.textContent = '✓ Correo copiado al portapapeles';
        b.classList.add('is-done');
      } catch {
        status.textContent = b.dataset.copy;
      }
      clearTimeout(t);
      t = setTimeout(() => { status.textContent = original; b.classList.remove('is-done'); }, 2400);
    };
    root.addEventListener('click', onClick);
    return () => { clearTimeout(t); root.removeEventListener('click', onClick); };
  }
};
