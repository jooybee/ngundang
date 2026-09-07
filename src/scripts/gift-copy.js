export function initGiftCopy() {
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      try {
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        ok ? resolve() : reject();
      } catch (e) {
        document.body.removeChild(ta);
        reject(e);
      }
    });
  }

  document.querySelectorAll('.gift-btn[data-copy]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy') || '';
      if (!text) return;
      copyText(text).then(() => {
        const old = btn.textContent;
        btn.textContent = 'Tersalin!';
        btn.classList.add('is-copied');
        setTimeout(() => {
          btn.textContent = old;
          btn.classList.remove('is-copied');
        }, 1800);
      }).catch(() => {
        alert('Gagal menyalin. Salin manual: ' + text);
      });
    });
  });
}