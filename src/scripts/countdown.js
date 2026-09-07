export function initCountdown() {
  const target = new Date(document.body.getAttribute('data-wedding-date')).getTime();

  function tick() {
    const d = target - Date.now();
    if (d < 0) return;
    setText('days', Math.floor(d / 86400000));
    setText('hours', Math.floor((d % 86400000) / 3600000));
    setText('minutes', Math.floor((d % 3600000) / 60000));
    setText('seconds', Math.floor((d % 60000) / 1000));
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}