export function initCoverAudio() {
  const cover = document.getElementById('cover');
  const main = document.getElementById('main-content');
  const bgm = document.getElementById('bgm');
  const openBtn = document.getElementById('openBtn');
  if (!openBtn || !cover || !main) return;

  let isPlaying = false;
  const iconPlay = document.getElementById('iconPlay');
  const iconPause = document.getElementById('iconPause');

  function updateIcon() {
    if (!iconPlay || !iconPause) return;
    iconPlay.classList.toggle('hidden', isPlaying);
    iconPause.classList.toggle('hidden', !isPlaying);
  }

  openBtn.addEventListener('click', () => {
    cover.classList.add('hidden');
    main.classList.add('visible');
    if (bgm) {
      bgm.play().then(() => {
        isPlaying = true;
        updateIcon();
      }).catch(() => {});
    }
    setTimeout(() => {
      if (typeof window.__runObserve === 'function') window.__runObserve();
    }, 350);
  });

  const audioBtn = document.getElementById('audioBtn');
  if (audioBtn && bgm) {
    audioBtn.addEventListener('click', () => {
      if (isPlaying) {
        bgm.pause();
        isPlaying = false;
      } else {
        bgm.play().catch(() => {});
        isPlaying = true;
      }
      updateIcon();
    });
  }
}