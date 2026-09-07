export function initGuestName() {
  const el = document.getElementById('guestName');
  if (!el) return;
  try {
    const params = new URLSearchParams(window.location.search);
    let to = params.get('to');
    if (to) {
      to = decodeURIComponent(to.replace(/\+/g, ' ')).trim();
      if (to) el.textContent = to;
    }
  } catch (e) {}
}