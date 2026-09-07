export function initCoupleSlider() {
  const brideEl = document.querySelector('[data-slider="bride"]');
  const groomEl = document.querySelector('[data-slider="groom"]');
  const bride = brideEl && brideEl.querySelector('.slide-track');
  const groom = groomEl && groomEl.querySelector('.slide-track');
  if (!bride || !groom) return;

  const nB = bride.querySelectorAll('img').length;
  const nG = groom.querySelectorAll('img').length;
  const n = Math.min(nB, nG);
  if (n < 2) return;

  const gImgs = Array.prototype.slice.call(groom.querySelectorAll('img'));
  gImgs.reverse().forEach((img) => groom.appendChild(img));
  groom.style.transform = 'translateX(-' + ((n - 1) * 100) + '%)';

  let i = 0;
  setInterval(() => {
    i = (i + 1) % n;
    bride.style.transform = 'translateX(-' + (i * 100) + '%)';
    groom.style.transform = 'translateX(-' + ((n - 1 - i) * 100) + '%)';
  }, 5000);
}