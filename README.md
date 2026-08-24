# Undangan Minimalist Elegant – Astro Clone

Clone undangan digital bergaya **Minimalist Elegant** (inspired by leafitation.com) menggunakan **Astro**.

## Fitur

- Cover screen + tombol **Buka Undangan** (fade transition)
- Background music (toggle play/pause)
- Countdown timer real-time
- Foto Bride & Groom **circular** (`border-radius: 50%`)
- Scroll animations: **fadeInUp**, **fadeInDown**, **fadeIn**, **zoomIn**
- Section lengkap: Salam, Bride & Groom, Quote, Events, RSVP, Our Story, Gallery, Gift, Ucapan, Closing
- Form RSVP & Ucapan (client-side demo)
- Tombol Salin rekening / alamat
- Responsive & minimalist elegant typography (Playfair Display + Inter)

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:4321

## Deploy ke Vercel

```bash
npm run build
# lalu deploy folder `dist/` ke Vercel
# atau hubungkan repo ke Vercel (framework preset: Astro)
```

## Catatan

- Gambar memakai Unsplash (open source / free to use).
- Musik contoh dari Pixabay (ganti dengan file MP3 sendiri di production).
- Form belum terhubung backend – tinggal sambungkan ke Formspree / Supabase / API sendiri.
- Semua animasi dibuat dengan pure CSS + Intersection Observer (tanpa library tambahan).

## Customisasi

Edit file `src/pages/index.astro` untuk:
- Nama, tanggal, lokasi
- Foto (ganti URL Unsplash atau upload ke `public/`)
- Warna di bagian `:root` CSS
- Musik (ganti `src` audio)

Made with ♥ using Astro
