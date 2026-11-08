import { certifications } from '../data.js';
import { esc, viewHead, withTransition, $$ } from '../core/util.js';

const cats = ['Todas', ...new Set(certifications.map((c) => c.cat))];

const card = (c, i) => {
  const inner = `
    <div class="cert__top"><span class="cert__seal"><i data-lucide="${c.url ? 'award' : 'badge-check'}"></i></span><span class="cert__cat">${esc(c.cat)}</span></div>
    <h2 class="cert__title">${esc(c.title)}</h2>
    <span class="cert__issuer">${esc(c.issuer)}</span>
    <span class="cert__cta">${c.url ? 'Verificar credencial <i data-lucide="arrow-up-right"></i>' : '<i data-lucide="lock"></i> Sin enlace público'}</span>`;
  const attrs = `style="--d:${(i % 3) * 0.06}s" data-cat="${esc(c.cat)}"`;
  return c.url
    ? `<a class="cert card glass tilt reveal" ${attrs} href="${esc(c.url)}" target="_blank" rel="noopener noreferrer" aria-label="Verificar ${esc(c.title)} (${esc(c.issuer)}), se abre en otra pestaña">${inner}</a>`
    : `<div class="cert cert--nolink card glass tilt reveal" ${attrs}>${inner}</div>`;
};

export default {
  id: 'certificaciones',
  label: 'Certificaciones',
  render: () => `
    <section class="section">
      <div class="container">
        ${viewHead('04 · Certificaciones', 'Certificaciones', 'Cada tarjeta enlaza a la credencial original para verificarla.')}
        <div class="chips reveal" role="group" aria-label="Filtrar certificaciones">
          ${cats.map((c, i) => {
            const n = c === 'Todas' ? certifications.length : certifications.filter((x) => x.cat === c).length;
            return `<button type="button" class="chip ${i === 0 ? 'is-active' : ''}" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}<small>${n}</small></button>`;
          }).join('')}
        </div>
        <div class="certs">${certifications.map(card).join('')}</div>
      </div>
    </section>`,
  mount: (root) => {
    const chips = $$('.chip[data-cat]', root);
    const cards = $$('.cert', root);
    const onClick = (e) => {
      const chip = e.target.closest('.chip[data-cat]');
      if (!chip) return;
      const cat = chip.dataset.cat;
      withTransition(() => {
        chips.forEach((c) => { const on = c === chip; c.classList.toggle('is-active', on); c.setAttribute('aria-pressed', String(on)); });
        let i = 0;
        cards.forEach((el) => {
          const show = cat === 'Todas' || el.dataset.cat === cat;
          el.classList.toggle('is-hidden', !show);
          el.classList.remove('is-entering');
          if (show) {
            el.classList.add('is-in');
            el.style.setProperty('--i', i++);
            void el.offsetWidth;
            el.classList.add('is-entering');
          }
        });
      });
    };
    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }
};
