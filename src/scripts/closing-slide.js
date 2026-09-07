export function initClosingSlide() {
  const track = document.getElementById('closingTrack');
  if (!track) return;
  const slides = track.querySelectorAll('.closing-bg');
  const total = slides.length;
  if (total < 2) return;

  slides.forEach((s) => track.appendChild(s.cloneNode(true)));
  let index = 0;
  setInterval(() => {
    index++;
    track.style.transition = 'transform 2.4s cubic-bezier(0.25, 0.1, 0.25, 1)';
    track.style.transform = 'translateY(-' + (index * 100) + '%)';
    if (index >= total) {
      setTimeout(() => {
        track.style.transition = 'none';
        index = 0;
        track.style.transform = 'translateY(0)';
      }, 2500);
    }
  }, 4500);
}