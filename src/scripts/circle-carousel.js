export function initCircleCarousel() {
  const track = document.getElementById('circleTrack');
  if (!track) return;
  const originals = Array.prototype.slice.call(track.querySelectorAll('img'));
  const total = originals.length;
  if (total < 2) return;

  originals.forEach((img) => track.appendChild(img.cloneNode(true)));

  let idx = 0;
  setInterval(() => {
    idx += 1;
    const step = originals[0].getBoundingClientRect().width + 4;
    track.style.transition = 'transform 1.4s cubic-bezier(0.25, 0.1, 0.25, 1)';
    track.style.transform = 'translateX(-' + (idx * step) + 'px)';

    if (idx >= total) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        idx = 0;
      }, 1450);
    }
  }, 3000);
}