export function initGallery() {
  const strip = document.getElementById('galStrip');
  const track = document.getElementById('galTrack');
  const main = document.getElementById('galMain');
  if (!strip || !track || !main) return;

  const originals = Array.prototype.slice.call(track.querySelectorAll('.gal-thumb'));
  if (originals.length < 2) return;
  const total = originals.length;
  const GAP = 10;

  originals.forEach((btn) => track.appendChild(btn.cloneNode(true)));
  for (let i = originals.length - 1; i >= 0; i--) {
    track.insertBefore(originals[i].cloneNode(true), track.firstChild);
  }

  const thumbs = Array.prototype.slice.call(track.querySelectorAll('.gal-thumb'));
  let index = total;
  let x = 0, startX = 0, startY = 0, baseX = 0, dragging = false, moved = false;

  function itemSize() { return thumbs[0].offsetWidth + GAP; }
  function setX(nx, animate) {
    x = nx;
    track.style.transition = animate ? 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none';
    track.style.transform = 'translate3d(' + (-x) + 'px,0,0)';
  }
  function offsetFor(i) {
    const size = itemSize();
    return i * size - (strip.offsetWidth / 2 - thumbs[0].offsetWidth / 2);
  }
  function realIndex(i) {
    const r = i % total;
    return r < 0 ? r + total : r;
  }
  function updateMain(i) {
    const r = realIndex(i);
    const src = thumbs[total + r].getAttribute('data-full');
    thumbs.forEach((t, n) => {
      if (realIndex(n) === r) t.classList.add('is-active');
      else t.classList.remove('is-active');
    });
    main.classList.add('is-fading');
    setTimeout(() => {
      main.src = src;
      main.classList.remove('is-fading');
    }, 150);
  }
  function goTo(i, animate) {
    index = i;
    updateMain(index);
    setX(offsetFor(index), animate !== false);
  }
  function normalize() {
    if (index < total) {
      index += total;
      setX(offsetFor(index), false);
    } else if (index >= total * 2) {
      index -= total;
      setX(offsetFor(index), false);
    }
  }

  thumbs.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      if (moved) { e.preventDefault(); return; }
      goTo(i, true);
      setTimeout(normalize, 420);
    });
  });

  function onDown(cx, cy) {
    dragging = true; moved = false;
    startX = cx; startY = cy; baseX = x;
    track.style.transition = 'none';
  }
  function onMove(cx, cy) {
    if (!dragging) return;
    const dx = cx - startX, dy = cy - startY;
    if (!moved && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 8) {
      dragging = false; return;
    }
    if (Math.abs(dx) > 6) moved = true;
    setX(baseX - dx, false);
  }
  function onUp() {
    if (!dragging) return;
    dragging = false;
    const size = itemSize();
    const center = x + strip.offsetWidth / 2;
    let nearest = Math.round((center - thumbs[0].offsetWidth / 2) / size);
    nearest = Math.max(0, Math.min(thumbs.length - 1, nearest));
    goTo(nearest, true);
    setTimeout(normalize, 420);
  }

  strip.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    try { strip.setPointerCapture(e.pointerId); } catch (err) {}
    onDown(e.clientX, e.clientY);
  });
  strip.addEventListener('pointermove', (e) => onMove(e.clientX, e.clientY));
  strip.addEventListener('pointerup', onUp);
  strip.addEventListener('pointercancel', onUp);
  strip.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) onDown(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  strip.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) onMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  strip.addEventListener('touchend', onUp);

  setTimeout(() => goTo(total, false), 50);
  window.addEventListener('resize', () => setX(offsetFor(index), false));
}