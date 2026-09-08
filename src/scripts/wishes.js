export function initWishes(config) {
  if (!config || !config.supabaseUrl || !config.supabaseAnonKey) return;
  if (!window.supabase) return;

  const supabaseClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
  const PAGE_SIZE = 5;

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }

  function bubbleHtml(w) {
    const initial = (w.name || '?').trim().charAt(0).toUpperCase();
    return `
    <div class="wish-bubble">
      <div class="wish-avatar" aria-hidden="true">${escapeHtml(initial)}</div>
      <div class="wish-content">
        <div class="wish-name">${escapeHtml(w.name)}</div>
        <div class="wish-msg">${escapeHtml(w.message)}</div>
        <div class="wish-time">${new Date(w.created_at).toLocaleDateString('id-ID', {
          day: 'numeric', month: 'short', year: 'numeric'
        })}</div>
      </div>
    </div>`;
  }

  function setupNav(listEl, navEl, pageCount) {
    if (pageCount <= 1) {
      navEl.innerHTML = '';
      return;
    }

    navEl.innerHTML = `
      <div class="wish-nav">
        <button type="button" class="wish-nav-btn" id="wishPrev" aria-label="Sebelumnya">&#8249;</button>
        <span class="wish-nav-count" id="wishCount">1 / ${pageCount}</span>
        <button type="button" class="wish-nav-btn" id="wishNext" aria-label="Berikutnya">&#8250;</button>
      </div>`;

    const prevBtn = navEl.querySelector('#wishPrev');
    const nextBtn = navEl.querySelector('#wishNext');
    const countEl = navEl.querySelector('#wishCount');

    const goTo = (page) => {
      listEl.scrollTo({ left: page * listEl.clientWidth, behavior: 'smooth' });
    };

    const updateButtons = (page) => {
      countEl.textContent = `${page + 1} / ${pageCount}`;
      prevBtn.disabled = page === 0;
      nextBtn.disabled = page === pageCount - 1;
    };

    prevBtn.addEventListener('click', () => {
      const page = Math.max(0, Math.round(listEl.scrollLeft / listEl.clientWidth) - 1);
      goTo(page);
    });
    nextBtn.addEventListener('click', () => {
      const page = Math.min(pageCount - 1, Math.round(listEl.scrollLeft / listEl.clientWidth) + 1);
      goTo(page);
    });

    listEl.addEventListener('scroll', () => {
      updateButtons(Math.round(listEl.scrollLeft / listEl.clientWidth));
    });

    updateButtons(0);
  }

  async function loadWishes() {
    const listEl = document.getElementById('wishList');
    const navEl = document.getElementById('wishDots');
    if (!listEl) return;

    try {
      const { data, error } = await supabaseClient
        .from('wishes')
        .select('name, message, created_at')
        .order('created_at', { ascending: false })
        .limit(1000);

      if (error) throw error;

      if (!data || data.length === 0) {
        listEl.innerHTML = '<p style="text-align:center;color:#7A736C;font-size:14px;">Jadilah yang pertama memberi doa 🙏</p>';
        if (navEl) navEl.innerHTML = '';
        return;
      }

      const pages = [];
      for (let i = 0; i < data.length; i += PAGE_SIZE) {
        pages.push(data.slice(i, i + PAGE_SIZE));
      }

      listEl.innerHTML = pages
        .map((page) => `<div class="wish-page">${page.map(bubbleHtml).join('')}</div>`)
        .join('');

      if (navEl) setupNav(listEl, navEl, pages.length);

    } catch (err) {
      console.error(err);
      listEl.innerHTML = `<p style="text-align:center;color:#c45c5c;font-size:13px;">Gagal memuat: ${err.message}</p>`;
      if (navEl) navEl.innerHTML = '';
    }
  }

  function initForm() {
    const form = document.getElementById('wishForm');
    const statusEl = document.getElementById('wishStatus');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const name = document.getElementById('wishName').value.trim();
      const message = document.getElementById('wishMessage').value.trim();
      if (!name || !message) return;

      statusEl.textContent = 'Mengirim...';
      statusEl.style.color = '#7A736C';

      try {
        const { error } = await supabaseClient
          .from('wishes')
          .insert([{ name, message }]);

        if (error) throw error;

        statusEl.textContent = 'Terima kasih! Doa & ucapanmu sudah terkirim 🙏';
        statusEl.style.color = 'var(--accent)';
        form.reset();
        loadWishes();
      } catch (err) {
        console.error(err);
        statusEl.textContent = 'Gagal: ' + err.message;
        statusEl.style.color = '#c45c5c';
      }
    });
  }

  initForm();
  loadWishes();

  supabaseClient
    .channel('wishes-channel')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'wishes' }, () => {
      loadWishes();
    })
    .subscribe();
}
