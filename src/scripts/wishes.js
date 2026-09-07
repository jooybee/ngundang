export function initWishes(config) {
  if (!config || !config.supabaseUrl || !config.supabaseAnonKey) return;
  if (!window.supabase) return;

  const supabaseClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }

  async function loadWishes() {
    const listEl = document.getElementById('wishList');
    if (!listEl) return;

    try {
      const { data, error } = await supabaseClient
        .from('wishes')
        .select('name, message, created_at')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;

      if (!data || data.length === 0) {
        listEl.innerHTML = '<p style="text-align:center;color:#7A736C;font-size:14px;">Jadilah yang pertama memberi doa 🙏</p>';
        return;
      }

      listEl.innerHTML = data.map((w) => `
        <div class="wish-item">
          <strong>${escapeHtml(w.name)}</strong>
          <p>${escapeHtml(w.message)}</p>
          <small>${new Date(w.created_at).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'long', year: 'numeric'
          })}</small>
        </div>
      `).join('');
    } catch (err) {
      console.error(err);
      listEl.innerHTML = `<p style="text-align:center;color:#c45c5c;font-size:13px;">Gagal memuat: ${err.message}</p>`;
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