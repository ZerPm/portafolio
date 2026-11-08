import * as THREE from 'three';

// Fondo 3D: una red de nodos (como un grafo de automatización) que se conecta por cercanía,
// con pulsos de datos viajando por las aristas y un núcleo poliédrico que reacciona al cursor y al scroll.

export function initScene(canvas) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = window.innerWidth < 760;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    canvas.remove();
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05060f, 0.045);
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 14);

  const root = new THREE.Group();
  scene.add(root);

  // ---------- textura circular suave para los puntos ----------
  const dot = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.25, 'rgba(255,255,255,0.85)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  })();

  const cA = new THREE.Color('#38e1ff');
  const cB = new THREE.Color('#8b5cf6');
  const cC = new THREE.Color('#22f5a6');

  // ---------- red de nodos ----------
  const N = small ? 70 : 140;
  const MAX_DIST = small ? 3.2 : 2.7;
  const bounds = new THREE.Vector3(14, 8, 6);
  const pos = new Float32Array(N * 3);
  const vel = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.5) * bounds.x * 2;
    pos[i * 3 + 1] = (Math.random() - 0.5) * bounds.y * 2;
    pos[i * 3 + 2] = (Math.random() - 0.5) * bounds.z * 2;
    vel[i * 3] = (Math.random() - 0.5) * 0.012;
    vel[i * 3 + 1] = (Math.random() - 0.5) * 0.012;
    vel[i * 3 + 2] = (Math.random() - 0.5) * 0.008;
    const c = cA.clone().lerp(cB, Math.random());
    if (Math.random() < 0.12) c.copy(cC);
    col.set([c.r, c.g, c.b], i * 3);
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const pMat = new THREE.PointsMaterial({
    size: 0.22, map: dot, vertexColors: true, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending, sizeAttenuation: true
  });
  const points = new THREE.Points(pGeo, pMat);
  root.add(points);

  const MAX_SEG = N * 8;
  const lPos = new Float32Array(MAX_SEG * 6);
  const lCol = new Float32Array(MAX_SEG * 6);
  const lGeo = new THREE.BufferGeometry();
  lGeo.setAttribute('position', new THREE.BufferAttribute(lPos, 3).setUsage(THREE.DynamicDrawUsage));
  lGeo.setAttribute('color', new THREE.BufferAttribute(lCol, 3).setUsage(THREE.DynamicDrawUsage));
  const lMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const lines = new THREE.LineSegments(lGeo, lMat);
  root.add(lines);

  // pulsos de datos sobre las aristas
  const P = small ? 14 : 28;
  const pulsePos = new Float32Array(P * 3);
  const pulseGeo = new THREE.BufferGeometry();
  pulseGeo.setAttribute('position', new THREE.BufferAttribute(pulsePos, 3).setUsage(THREE.DynamicDrawUsage));
  const pulseMat = new THREE.PointsMaterial({
    size: 0.32, map: dot, color: 0xffffff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  });
  const pulses = new THREE.Points(pulseGeo, pulseMat);
  root.add(pulses);
  const pulseState = Array.from({ length: P }, () => ({ seg: -1, t: Math.random(), speed: 0.008 + Math.random() * 0.016 }));

  // ---------- núcleo ----------
  const core = new THREE.Group();
  const icoGeo = new THREE.IcosahedronGeometry(2.2, 1);
  const wire = new THREE.LineSegments(
    new THREE.WireframeGeometry(icoGeo),
    new THREE.LineBasicMaterial({ color: 0x38e1ff, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  const inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.35, 0),
    new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  const verts = new THREE.Points(
    icoGeo,
    new THREE.PointsMaterial({ size: 0.16, map: dot, color: 0x9ff3ff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.1, 0.012, 8, 160),
    new THREE.MeshBasicMaterial({ color: 0x22f5a6, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending })
  );
  ring.rotation.x = Math.PI / 2.4;
  const ring2 = ring.clone();
  ring2.material = ring.material.clone();
  ring2.material.color = new THREE.Color(0x8b5cf6);
  ring2.scale.setScalar(1.18);
  ring2.rotation.set(Math.PI / 3, Math.PI / 5, 0);
  core.add(wire, inner, verts, ring, ring2);
  scene.add(core);

  let baseZ = 0;
  // modo "calm": fuera de Inicio el fondo se atenúa y se aleja para no competir con el texto
  let calm = 0;
  let calmTarget = 0;
  let tick = 0;
  const placeCore = () => {
    const w = window.innerWidth;
    if (w < 900) core.position.set(2, 3.5, -9);
    else core.position.set(5.2, 0.4, 0);
    baseZ = core.position.z;
    core.scale.setScalar(w < 900 ? 0.8 : 1);
  };
  placeCore();

  // ---------- interacción ----------
  const mouse = new THREE.Vector2(0, 0);
  const target = new THREE.Vector2(0, 0);
  const mouse3 = new THREE.Vector3();
  let scrollP = 0;

  window.addEventListener('pointermove', (e) => {
    target.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, { passive: true });
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollP = max > 0 ? window.scrollY / max : 0;
  }, { passive: true });

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    placeCore();
  };
  window.addEventListener('resize', onResize);

  // ---------- loop ----------
  const tmp = new THREE.Vector3();
  const tmp2 = new THREE.Vector3();
  const segList = [];
  let running = true;
  let burst = 0;
  const clock = new THREE.Clock();

  function updateNetwork() {
    // proyecta el cursor al plano z=0 del mundo
    mouse3.set(mouse.x, mouse.y, 0.5).unproject(camera);
    mouse3.sub(camera.position).normalize();
    const d = -camera.position.z / mouse3.z;
    mouse3.multiplyScalar(d).add(camera.position);
    root.worldToLocal(mouse3);

    for (let i = 0; i < N; i++) {
      const ix = i * 3;
      if (!reduced) {
        pos[ix] += vel[ix];
        pos[ix + 1] += vel[ix + 1];
        pos[ix + 2] += vel[ix + 2];
      }
      // atracción leve hacia el cursor
      const dx = mouse3.x - pos[ix];
      const dy = mouse3.y - pos[ix + 1];
      const dist2 = dx * dx + dy * dy;
      if (dist2 < 9 && dist2 > 0.2) {
        pos[ix] += dx * 0.0035;
        pos[ix + 1] += dy * 0.0035;
      }
      if (Math.abs(pos[ix]) > bounds.x) vel[ix] *= -1;
      if (Math.abs(pos[ix + 1]) > bounds.y) vel[ix + 1] *= -1;
      if (Math.abs(pos[ix + 2]) > bounds.z) vel[ix + 2] *= -1;
    }
    pGeo.attributes.position.needsUpdate = true;

    let s = 0;
    segList.length = 0;
    const md2 = MAX_DIST * MAX_DIST;
    for (let i = 0; i < N && s < MAX_SEG; i++) {
      for (let j = i + 1; j < N && s < MAX_SEG; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < md2) {
          const a = (1 - d2 / md2) * (0.55 + burst * 0.6) * (1 - calm * 0.6);
          lPos.set([pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2], pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]], s * 6);
          lCol.set([col[i * 3] * a, col[i * 3 + 1] * a, col[i * 3 + 2] * a, col[j * 3] * a, col[j * 3 + 1] * a, col[j * 3 + 2] * a], s * 6);
          segList.push(i, j);
          s++;
        }
      }
    }
    lGeo.setDrawRange(0, s * 2);
    lGeo.attributes.position.needsUpdate = true;
    lGeo.attributes.color.needsUpdate = true;

    const segCount = segList.length / 2;
    for (let k = 0; k < P; k++) {
      const st = pulseState[k];
      if (st.seg < 0 || st.seg >= segCount || st.t >= 1) {
        st.seg = segCount ? Math.floor(Math.random() * segCount) : -1;
        st.t = 0;
      }
      if (st.seg >= 0) {
        const i = segList[st.seg * 2];
        const j = segList[st.seg * 2 + 1];
        st.t += st.speed * (1 + burst * 2);
        tmp2.set(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        tmp.set(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]).lerp(tmp2, st.t);
        pulsePos.set([tmp.x, tmp.y, tmp.z], k * 3);
      } else {
        pulsePos.set([0, 0, -50], k * 3);
      }
    }
    pulseGeo.attributes.position.needsUpdate = true;
  }

  function frame() {
    if (!running) return;
    const t = clock.getElapsedTime();
    mouse.lerp(target, 0.06);
    burst *= 0.95;
    calm += (calmTarget - calm) * 0.05;
    tick++;

    // en modo calm la red se recalcula cada 2 frames (menos CPU, mismo efecto visual)
    if (calm < 0.5 || tick % 2 === 0) updateNetwork();
    pMat.opacity = 1 - calm * 0.5;
    pulseMat.opacity = 1 - calm * 0.65;
    inner.material.opacity = 0.55 - calm * 0.3;
    verts.material.opacity = 1 - calm * 0.55;
    ring.material.opacity = ring2.material.opacity = 0.5 - calm * 0.3;
    core.position.z = baseZ - calm * 5;

    root.rotation.y = mouse.x * 0.12 + scrollP * 0.9;
    root.rotation.x = -mouse.y * 0.08 + scrollP * 0.25;

    const spin = reduced ? 0 : 1;
    core.rotation.y = t * 0.18 * spin + mouse.x * 0.6 + scrollP * Math.PI * 2;
    core.rotation.x = t * 0.08 * spin - mouse.y * 0.4;
    inner.rotation.y = -t * 0.5 * spin;
    inner.rotation.z = t * 0.3 * spin;
    ring.rotation.z = t * 0.25 * spin;
    ring2.rotation.z = -t * 0.18 * spin;
    const pulse = 1 + Math.sin(t * 1.6) * 0.03 + burst * 0.08;
    core.scale.setScalar((window.innerWidth < 900 ? 0.8 : 1) * pulse * (1 - scrollP * 0.35));
    wire.material.opacity = (0.28 + Math.sin(t * 2) * 0.06 + burst * 0.3) * (1 - calm * 0.5);

    camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.04;
    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.04;
    camera.position.z = 14 - scrollP * 3;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  document.addEventListener('visibilitychange', () => {
    const vis = document.visibilityState === 'visible';
    if (vis && !running) { running = true; requestAnimationFrame(frame); }
    else if (!vis) running = false;
  });

  requestAnimationFrame(frame);

  return {
    // energía extra (al abrir un flujo, al hacer clic, etc.)
    pulse: () => { burst = 1; },
    setMode: (mode) => { calmTarget = mode === 'calm' ? 1 : 0; }
  };
}
