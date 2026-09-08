export function initStorySlide() {
  const bgTrack = document.getElementById('storyTrack');
  const photoTrack = document.getElementById('storyPhotoTrack');
  const inner = photoTrack && photoTrack.closest('.story-photos-inner');

  const DURATION = 2500;
  const INTERVAL = 5500;
  const EASE = 'transform 2.2s cubic-bezier(0.25, 0.1, 0.25, 1)';

  function setupPhoto(track) {
    if (!track) return null;
    const slides = Array.prototype.slice.call(track.querySelectorAll('.story-photo'));
    const total = slides.length;
    if (total < 2) return null;
    slides.forEach((s) => track.appendChild(s.cloneNode(true)));
    track.style.flexDirection = 'column';
    track.style.transition = 'none';
    track.style.transform = 'translateY(0%)';
    return { track, total, index: 0 };
  }

  function setupBg(track) {
    if (!track) return null;
    const slides = Array.prototype.slice.call(track.querySelectorAll('.story-bg'));
    const total = slides.length;
    if (total < 2) return null;
    for (let i = slides.length - 1; i >= 0; i--) {
      track.insertBefore(slides[i].cloneNode(true), track.firstChild);
    }
    track.style.flexDirection = 'column';
    track.style.transition = 'none';
    track.style.transform = 'translateY(-' + (total * 100) + '%)';
    return { track, total, index: total };
  }

  const photo = setupPhoto(photoTrack);
  const bg = setupBg(bgTrack);

  function stepPhoto(s) {
    if (!s) return;
    s.index += 1;
    s.track.style.transition = EASE;
    s.track.style.transform = 'translateY(-' + (s.index * 100) + '%)';
    if (s.index >= s.total) {
      setTimeout(() => {
        s.track.style.transition = 'none';
        s.index = 0;
        s.track.style.transform = 'translateY(0%)';
      }, DURATION + 80);
    }
  }

  function stepBg(s) {
    if (!s) return;
    s.index -= 1;
    s.track.style.transition = EASE;
    s.track.style.transform = 'translateY(-' + (s.index * 100) + '%)';
    if (s.index <= 0) {
      setTimeout(() => {
        s.track.style.transition = 'none';
        s.index = s.total;
        s.track.style.transform = 'translateY(-' + (s.total * 100) + '%)';
      }, DURATION + 80);
    }
  }

  let started = false;
  function startSyncedSlide() {
    if (started) return;
    started = true;
    setInterval(() => {
      stepBg(bg);
      stepPhoto(photo);
    }, INTERVAL);
  }

  if (inner) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          inner.classList.add('is-visible');
          setTimeout(startSyncedSlide, 1200);
          obs.disconnect();
        }
      });
    }, { threshold: 0.25 });
    obs.observe(inner);
  } else {
    startSyncedSlide();
  }
}
