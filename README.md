# Ngundang — Template Undangan Digital Elegant

Template undangan pernikahan digital berbasis **Astro** (static site).  
Dirancang agar **mudah & cepat diedit** — cocok untuk jasa pembuatan undangan online.

Demo: ganti dengan URL deploy kamu.

---

## Fitur Utama

- Cover split-screen + personalisasi nama tamu (`?to=Nama+Tamu`)
- Background music (play setelah buka undangan)
- Countdown real-time
- Section lengkap: Salam, Bride & Groom, Quote, Events, RSVP, Our Story, Gallery, Ucapan, Gift, Closing
- Form Ucapan & Doa tersimpan di Supabase
- RSVP via Tally (embed)
- Tombol salin rekening & alamat
- Tema/warna mudah diganti lewat 1 file
- Responsive (mobile & desktop)
- Animasi scroll + beberapa carousel foto

---

## Struktur Project

```
ngundang1/
├── public/
│   ├── photos/          ← taruh semua foto di sini
│   └── music/           ← taruh bgm.mp3 di sini
├── src/
│   ├── data/
│   │   └── wedding.ts   ← **EDIT SEMUA DATA & TEMA DI SINI**
│   └── pages/
│       └── index.astro  ← halaman utama (jangan diubah untuk konten)
├── package.json
└── README.md
```

---

## Cara Pakai Cepat (untuk undangan baru)

### 1. Clone & Install

```bash
git clone https://github.com/jooybee/ngundang1.git
cd ngundang1
npm install
npm run dev
```

Buka http://localhost:4321

### 2. Edit Data Undangan

Buka file **`src/data/wedding.ts`**. Semua teks, tanggal, lokasi, rekening, foto, musik, dan **tema warna** ada di sini.

Yang biasanya diganti:

| Bagian              | Yang diubah                                      |
|---------------------|--------------------------------------------------|
| `couple`            | Nama mempelai, orang tua, Instagram              |
| `datetime`          | Tanggal & jam (format ISO + timezone)            |
| `dateLabel`         | Teks tanggal yang tampil                         |
| `events`            | Akad, Resepsi, Live Streaming                    |
| `salam`, `quote`    | Teks salam & ayat                                |
| `rsvp.tallyEmbed`   | Link embed form Tally                            |
| `story`             | Timeline cerita                                  |
| `gift`              | Rekening bank + alamat fisik                     |
| `photos`            | Path foto (setelah upload ke `public/photos/`)   |
| `music`             | Path musik                                       |
| `theme.colors`      | **Warna / vibe undangan**                        |
| `supabase`          | URL + anon key Supabase                          |

### 3. Ganti Foto

1. Letakkan foto di folder `public/photos/`
2. Sesuaikan path di bagian `photos` di `wedding.ts`  
   Contoh: `coverLeft: "/photos/cover-left.jpg"`

Lihat daftar nama file yang disarankan di `public/photos/README.md`.

### 4. Ganti Musik

1. Upload file MP3 ke `public/music/bgm.mp3`
2. Ubah di `wedding.ts`:
   ```ts
   music: "/music/bgm.mp3",
   ```

### 5. Build & Deploy

```bash
npm run build
```

Hasil ada di folder `dist/`. Deploy ke:

- **Vercel** (paling mudah — hubungkan repo GitHub)
- Netlify
- Cloudflare Pages
- Atau hosting static apa saja

---

## Ganti Tema / Warna (Vibe)

Cukup edit bagian `theme` di `src/data/wedding.ts`:

```ts
theme: {
  name: "Elegant Cream",          // hanya dokumentasi
  colors: {
    cream: "#F7F3EE",             // background utama
    soft: "#EFEAE3",              // background section soft
    elegant: "#1E1E1E",           // teks utama & heading
    muted: "#7A736C",             // teks sekunder
    accent: "#9A7B5A",            // aksen utama (tombol, highlight)
    accentHover: "#7A6B5A",       // aksen saat hover
    accentAlt: "#8B7355",         // aksen alternatif (IG button dll)
    accentSoft: "#C4B8A8",        // aksen lembut (garis, badge)
    panelSoft: "#D9D0C4",         // panel cover kanan & salam
    light: "#FFFFFF",             // putih / kontras
  },
},
```

**Contoh tema siap pakai:**

**1. Elegant Cream (default)**
```ts
cream: "#F7F3EE", soft: "#EFEAE3", elegant: "#1E1E1E", muted: "#7A736C",
accent: "#9A7B5A", accentHover: "#7A6B5A", accentAlt: "#8B7355",
accentSoft: "#C4B8A8", panelSoft: "#D9D0C4", light: "#FFFFFF"
```

**2. Soft Blush (romantis)**
```ts
cream: "#FDF6F0", soft: "#F8EDE4", elegant: "#3D2C2E", muted: "#8C6B6B",
accent: "#C49A9A", accentHover: "#A67B7B", accentAlt: "#B88A8A",
accentSoft: "#E0C4C4", panelSoft: "#F0E0D8", light: "#FFFFFF"
```

**3. Modern Dark**
```ts
cream: "#1A1A1A", soft: "#242424", elegant: "#F5F5F5", muted: "#A0A0A0",
accent: "#D4AF37", accentHover: "#B8942E", accentAlt: "#C9A227",
accentSoft: "#3A3520", panelSoft: "#2A2A2A", light: "#121212"
```

**4. Forest Green**
```ts
cream: "#F4F7F4", soft: "#E8EFE8", elegant: "#1C2B1C", muted: "#5C6B5C",
accent: "#4A7043", accentHover: "#3A5A35", accentAlt: "#5A8050",
accentSoft: "#A8C4A0", panelSoft: "#D0DCD0", light: "#FFFFFF"
```

Setelah ganti warna, cukup refresh browser (atau `npm run dev` ulang).

---

## Setup Supabase (Ucapan & Doa)

Supabase dipakai untuk menyimpan dan menampilkan ucapan tamu.

### Langkah-langkah

1. Buat akun di [supabase.com](https://supabase.com) (gratis)
2. Buat **New Project**
3. Masuk ke **SQL Editor** → New query, lalu jalankan SQL berikut:

```sql
-- Buat tabel wishes
create table public.wishes (
  id bigint generated by default as identity primary key,
  name text not null,
  message text not null,
  created_at timestamptz default now()
);

-- Aktifkan Row Level Security
alter table public.wishes enable row level security;

-- Izinkan siapa saja membaca ucapan
create policy "Public can read wishes"
  on public.wishes for select
  using (true);

-- Izinkan siapa saja menambah ucapan
create policy "Public can insert wishes"
  on public.wishes for insert
  with check (true);
```

4. Ambil **Project URL** dan **anon public key**:
   - Settings → API
   - Copy `Project URL` dan `anon` `public` key

5. Paste ke `src/data/wedding.ts`:

```ts
supabase: {
  url: "https://xxxxxxxx.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
},
```

**Catatan keamanan:**  
Karena key bersifat public (client-side), pastikan RLS sudah aktif seperti di atas. Jangan pernah expose `service_role` key.

---

## Setup Tally (RSVP)

Tally dipakai untuk form konfirmasi kehadiran.

### Langkah-langkah

1. Buat akun di [tally.so](https://tally.so) (gratis)
2. Buat form baru. Saran field:
   - Nama Lengkap (Short answer)
   - Jumlah yang hadir (Number)
   - Konfirmasi Kehadiran (Multiple choice: Hadir / Tidak Hadir / Masih Ragu)
   - Ucapan (Long text) — opsional
3. Setelah form siap, klik **Share** → **Embed**
4. Pilih opsi **Standard** atau copy link embed
5. Paste ke `src/data/wedding.ts`:

```ts
rsvp: {
  heading: "RSVP",
  body: "Kirimkan Konfirmasi Kehadiran Kepada Mempelai Melalui Form Berikut.",
  tallyEmbed: "https://tally.so/embed/xxxxxx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
},
```

**Tips:**  
Tambahkan parameter `?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1` agar tampil rapi di undangan.

---

## Link Undangan Personal

Setiap tamu bisa mendapat link khusus:

```
https://domain-anda.com/?to=Bapak+dan+Ibu+Santoso
```

Nama akan muncul di cover: **"Kepada Yth. Bapak dan Ibu Santoso"**

---

## Deploy ke Vercel (Rekomendasi)

1. Push project ke GitHub
2. Masuk ke [vercel.com](https://vercel.com) → New Project
3. Import repository
4. Framework Preset: **Astro**
5. Deploy

Setiap kali push ke `main`, Vercel otomatis rebuild.

---

## Customisasi Lanjutan

- **Ganti font**: Edit link Google Fonts di `index.astro` (bagian `<head>`)
- **Tambah section**: Edit `src/pages/index.astro` (disarankan pecah jadi komponen Astro dulu)
- **Ganti animasi**: Cari class `.aos` dan keyframes di CSS

---

## Lisensi & Penggunaan untuk Jasa

Template ini boleh digunakan untuk jasa pembuatan undangan digital.  
Silakan sesuaikan footer (`meta.footer`) dengan brand kamu.

---

## Dukungan

Kalau ada pertanyaan atau butuh penyesuaian, buka Issue di repository ini atau hubungi pembuat template.

Made with ♥ using Astro
