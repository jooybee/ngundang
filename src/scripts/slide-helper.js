export function autoSlideX(trackId, slideSelector, { intervalMs = 5500, transitionMs = 2200, resetDelayMs = 2300 } = {}) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const slides = track.querySelectorAll(slideSelector);
  const total = slides.length;
  if (total < 2) return;

  slides.forEach((s) => track.appendChild(s.cloneNode(true)));

  let index = 0;
  setInterval(() => {
    index++;
    track.style.transition = `transform ${transitionMs / 1000}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    if (index >= total) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        index = 0;
      }, resetDelayMs);
    }
  }, intervalMs);
}