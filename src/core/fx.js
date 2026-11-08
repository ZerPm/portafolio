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

/* ---------- cursor, tilt y magnetismo (delegados: sirven para cualquier vista) ---------- */
export function setupPointer() {
  if (!finePointer) return;
  const cursor = $('.cursor');
  const dot = $('.cursor__dot');
  const ring = $('.cursor__ring');
  let x = -100, y = -100, rx = -100, ry = -100;
  let magnet = null;

  window.addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY;

    const card = e.target.closest('.tilt');
    if (card) {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
      if (!reduced) {
        const max = card.classList.contains('flow') ? 4 : 6;
        card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateY(-2px)`;
      }
    }

    const m = e.target.closest('[data-magnetic]:not(.tilt)');
    if (magnet && magnet !== m) magnet.style.transform = '';
    magnet = m;
    if (m && !reduced) {
      const r = m.getBoundingClientRect();
      m.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.22}px, ${(e.clientY - (r.top + r.height / 2)) * 0.3}px)`;
    }
  }, { passive: true });

  document.addEventListener('pointerout', (e) => {
    const card = e.target.closest('.tilt');
    if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
  });
  document.addEventListener('pointerover', (e) => {
    cursor.classList.toggle('is-hover', !!e.target.closest('a, button, .tag, [data-magnetic]'));
  });

  const loop = () => {
    rx += (x - rx) * 0.18;
    ry += (y - ry) * 0.18;
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();
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
