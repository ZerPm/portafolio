import { $, $$, reduced, finePointer } from './util.js';

/* ---------- reveal tipo frame (por vista) ---------- */
let revealIO;
export function observeReveals(root) {
  revealIO?.disconnect();
  revealIO = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      if (e.target.querySelector('[data-count]')) countUp(e.target);
      revealIO.unobserve(e.target);
    }),
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );
  $$('.reveal, .langs', root).forEach((el) => revealIO.observe(el));
}

export function countUp(root) {
  $$('[data-count]', root).forEach((el) => {
    const end = +el.dataset.count;
    const suf = el.dataset.suffix || '';
    if (reduced) { el.textContent = end + suf; return; }
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / 1400, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* ---------- texto con scramble (cancelable al cambiar de vista) ---------- */
export function startScramble(el, words) {
  if (!el || reduced) return () => {};
  const chars = '!<>-_\\/[]{}—=+*^?#01';
  let alive = true;
  let idx = 0;
  let timer;
  const scrambleTo = (text) => new Promise((resolve) => {
    const from = el.textContent;
    const queue = Array.from({ length: Math.max(from.length, text.length) }, (_, i) => ({
      from: from[i] || '', to: text[i] || '', start: Math.floor(Math.random() * 18), end: Math.floor(Math.random() * 18) + 18
    }));
    let frame = 0;
    const update = () => {
      if (!alive) return resolve();
      let out = '';
      let done = 0;
      for (const q of queue) {
        if (frame >= q.end) { done++; out += q.to; }
        else if (frame >= q.start) out += `<span style="color:var(--violet)">${chars[Math.floor(Math.random() * chars.length)]}</span>`;
        else out += q.from;
      }
      el.innerHTML = out;
      if (done === queue.length) resolve();
      else { frame++; requestAnimationFrame(update); }
    };
    update();
  });
  const loop = async () => {
    if (!alive) return;
    idx = (idx + 1) % words.length;
    await scrambleTo(words[idx]);
    if (alive) timer = setTimeout(loop, 2600);
  };
  timer = setTimeout(loop, 2400);
  return () => { alive = false; clearTimeout(timer); };
}

/* ---------- seguimiento del mouse de bajo consumo ----------
 * - pointermove solo guarda coordenadas y el elemento bajo el puntero: cero lecturas de layout.
 * - Un único requestAnimationFrame (programado solo cuando el mouse se movió) hace todo el trabajo:
 *   primero LEE (un getBoundingClientRect cacheado) y después ESCRIBE, sin layout thrashing.
 * - El glow se mueve con variables CSS (--mouse-x / --mouse-y) definidas en el propio elemento,
 *   que solo afectan a su transform: se resuelve en el compositor, sin repintar la página.
 */
export function setupPointer(glow) {
  if (!finePointer) return;
  let x = -1000, y = -1000;
  let scheduled = false;
  let card = null, cardRect = null;
  let magnet = null, magnetRect = null;

  const reset = (el) => { if (el) { el.style.transform = ''; el.classList.remove('is-tilting'); } };

  const frame = () => {
    scheduled = false;
    // 1) lecturas
    if (card && !cardRect) cardRect = card.getBoundingClientRect();
    if (magnet && !magnetRect) magnetRect = magnet.getBoundingClientRect();
    // 2) escrituras
    glow.style.setProperty('--mouse-x', `${x}px`);
    glow.style.setProperty('--mouse-y', `${y}px`);
    if (card && cardRect) {
      const px = (x - cardRect.left) / cardRect.width;
      const py = (y - cardRect.top) / cardRect.height;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
      if (!reduced) {
        const max = card.classList.contains('flow') ? 3 : 4;
        card.classList.add('is-tilting');
        card.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg)`;
      }
    }
    if (magnet && magnetRect && !reduced) {
      magnet.style.transform = `translate(${(x - (magnetRect.left + magnetRect.width / 2)) * 0.2}px, ${(y - (magnetRect.top + magnetRect.height / 2)) * 0.25}px)`;
    }
  };
  const schedule = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(frame); } };

  window.addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY;
    const t = e.target instanceof Element ? e.target : null;
    const c = t?.closest('.tilt') || null;
    if (c !== card) { reset(card); card = c; cardRect = null; }
    const m = t?.closest('[data-magnetic]:not(.tilt)') || null;
    if (m !== magnet) { reset(magnet); magnet = m; magnetRect = null; }
    schedule();
  }, { passive: true });

  // al hacer scroll o cambiar el tamaño, los rects cacheados dejan de valer
  const invalidate = () => { cardRect = null; magnetRect = null; };
  window.addEventListener('scroll', invalidate, { passive: true });
  window.addEventListener('resize', invalidate, { passive: true });
  document.addEventListener('pointerleave', () => { reset(card); reset(magnet); card = magnet = null; glow.classList.remove('is-on'); });
  document.addEventListener('pointerenter', () => glow.classList.add('is-on'));
  glow.classList.add('is-on');
}

/* ---------- onda al hacer clic en botones interactivos ---------- */
export function setupRipple() {
  document.addEventListener('pointerdown', (e) => {
    const el = e.target.closest('.ripple');
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const s = document.createElement('span');
    s.className = 'ripple__wave';
    const size = Math.max(r.width, r.height) * 2;
    s.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
    el.appendChild(s);
    s.addEventListener('animationend', () => s.remove());
  });
}
