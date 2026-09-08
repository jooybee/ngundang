/**
 * ============================================================
 *  WEDDING CONFIG — edit file ini saja untuk undangan baru
 * ============================================================
 *  Foto  → letakkan di public/photos/  (lihat nama file di bawah)
 *  Musik → letakkan di public/music/bgm.mp3
 * ============================================================
 */

export const wedding = {
  /* ---------- PASANGAN ---------- */
  couple: {
    /** Ditampilkan di cover, hero, closing, title */
    short: "Aji & Ayu",
    bride: {
      fullName: "Ardiyah Ayu Rahmawati",
      parents: "Putri Pertama Bapak Sunardi Noto\n& Ibu Anis Rohmawati",
      instagram: "@instagram",
      instagramUrl: "https://instagram.com/",
    },
    groom: {
      fullName: "Aji Sasmito",
      parents: "Putra Pertama Bapak Marwoto\n& Ibu Ruharyati",
      instagram: "@jooybee_",
      instagramUrl: "https://instagram.com/jooybee_",
    },
  },

  /* ---------- TANGGAL & WAKTU ---------- */
  /** ISO untuk countdown — format: YYYY-MM-DDTHH:mm:ss+07:00 */
  datetime: "2026-10-29T08:00:00+07:00",
  /** Teks tanggal di cover & event */
  dateLabel: "29 Oktober 2026",
  dateLabelLong: "Kamis,29 Oktober 2026",

  /* ---------- ACARA ---------- */
  events: [
    {
      label: "Akad Nikah",
      title: "Kamis, 29 Oktober 2026",
      time: "07.00 – 09.00 WIB",
      location: "Rumah kediaman mempelai wanita\n Jalan Jetis Rejo, RT.4/RW.4,\n Desa Mlilir, Gubug\n Kab. Grobogan, Jawa Tengah 58164",
      mapsUrl: "https://maps.app.goo.gl/PmifQbQ5TLFpVyUx9",
    },
    {
      label: "Resepsi",
      title: "Kamis, 29 Oktober 2026",
      time: "09.00 – 13.00 WIB",
      location: "Rumah kediaman mempelai wanita\n Jalan Jetis Rejo, RT.4/RW.4,\n Desa Mlilir, Gubug\n Kab. Grobogan, Jawa Tengah 58164",
      mapsUrl: "https://maps.app.goo.gl/TJRnFygjuPuYie2r6?g_st=ac",
    },
    {
      label: "Live Streaming",
      title: "",
      time: "",
      location:
        "Bagi tamu yang berhalangan hadir, silakan menyaksikan siaran langsung pernikahan kami melalui tautan di bawah.",
      mapsUrl: "",
      streamingUrl: "https://instagram.com/",
    },
  ],

  /* ---------- TEKS ---------- */
  salam: {
    heading: "Assalamu'alaikum wr wb",
    body: "Segala Puji Bagi Allah SWT yang telah menjadikan hambanya hidup berpasang-pasangan. Dengan memohon Ridho, Rahmat, dan Berkah Allah SWT, kami bermaksud untuk mengundang Saudara/i dalam acara pernikahan yang kami selenggarakan.",
  },
  quote: {
    text: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang",
    source: "AR-RUM AYAT : 21",
  },
  rsvp: {
    heading: "RSVP",
    body: "Kirimkan Konfirmasi Kehadiran Kepada Mempelai Melalui Form Berikut.",
    /** Ganti dengan embed Tally / Google Form Anda */
    tallyEmbed:
      "https://tally.so/embed/ODMZ1a?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
  },
  story: {
    heading: "Our Story",
    items: [
      {
        date: "09 September 2021",
        title: "Awal Bertemu",
        body: "Awal mula kami bertemu adalah dalam rentetan acara masa orientasi kampus di Jogja saat kami masih mahasiswa baru.",
      },
      {
        date: "20 Mei 2026",
        title: "Menjalin Hubungan",
        body: "Setelah berkomunikasi beberapa bulan dan menemukan kecocokan akhirnya kami memutuskan untuk menjalin sebuah komitmen.",
      },
      {
        date: "29 Oktober 2026",
        title: "Menikah",
        body: "Setelah menjalin hubungan beberapa tahun, akhirnya kami memantabkan hati untuk membawa hubungan ini ke jenjang yang lebih serius.",
      },
    ],
  },
  ucapan: {
    heading: "Ucapan & Doa",
    body: "Tinggalkan doa dan ucapan terbaik untuk kami.",
  },
  gift: {
    heading: "Wedding Gift",
    body: "Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih dapat menyampaikannya melalui:",
    bank: [
      {
      label: "Transfer Bank",
      bankName: "Bank Rakyat Indonesia (BRI)",
      number: "0083 0113 7850 506",
      numberCopy: "008301137850506",
      holder: "a.n. Ardiyah Ayu Rahmawati",
    },
      {
        label: "Transfer Bank",
        bankName: "Bank Rakyat Indonesia (BRI)",
        number: "1360 0100 2950 507",
        numberCopy: "136001002950507",
        holder: "a.n. Aji Sasmito",
      },
      ],
    address: {
      label: "Kirim Hadiah Fisik",
      name: "Ardiyah Ayu Rahmawati",
      lines: "Jalan Jetis Rejo, RT.4/RW.4, Desa Mlilir, Gubug\n Kab. Grobogan, Jawa Tengah 58164",
      copy: "Jalan Jetis Rejo, RT.4/RW.4, Desa Mlilir, Gubug, Kab. Grobogan, Jawa Tengah 58164",
    },
  },
  closing: {
    label: "Kami yang berbahagia",
    thanks:
      "Merupakan sebuah kehormatan dan kebahagiaan bagi kami jika Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami. Terima kasih.",
  },
  cover: {
    label: "THE WEDDING OF",
    guestFallback: "Tamu Undangan",
    openButton: "Buka Undangan",
  },
  meta: {
    title: "The Wedding of Aji & Ayu",
    footer: "Made with ♥ Undangan Digital Gubug",
    ogImage: "/img/og-image.jpg",
  },

  /* ---------- TEMA / WARNA (ganti di sini saja untuk ubah vibe) ---------- */
  theme: {
    /** Nama tema (hanya untuk dokumentasi) */
    name: "Jawa Maroon",
    colors: {
      /** Background utama */
      cream: "#F8F1EC",
      /** Background sekunder / section soft */
      soft: "#F1E6DE",
      /** Teks utama & heading */
      elegant: "#2A1810",
      /** Teks sekunder / body */
      muted: "#7A5C50",
      /** Aksen utama (tombol, highlight, garis) */
      accent: "#8B3A3A",
      /** Aksen hover / lebih gelap */
      accentHover: "#6F2E2E",
      /** Aksen alternatif (IG button, label) */
      accentAlt: "#9A4A42",
      /** Aksen lembut (garis, badge) */
      accentSoft: "#C4A090",
      /** Panel soft (cover kanan, salam bg) */
      panelSoft: "#E5D0C0",
      /** Putih / kontras */
      light: "#FFFFFF",
    },
  },

  /* ---------- MUSIK ---------- */
  /** Path relatif dari public/ — ganti file di public/music/bgm.mp3 */
  music: "/music/nyidamsari.mp3",
  /** Setelah upload file: music: "/music/bgm.mp3", */

  /* ---------- FOTO (public/photos/) ----------
   *  Letakkan file dengan nama di bawah, atau biarkan URL Unsplash sebagai fallback.
   *  Format disarankan: JPG/WebP, landscape untuk hero/cover, square untuk bride/groom.
   */
  photos: {
    /* Ganti ke "/photos/nama-file.jpg" setelah upload ke public/photos/ */
    coverLeft: "/img/background1.jpg?w=1200&q=65",
    coverRight: "/img/background4.jpg?w=1200&q=65",
    mainSticky: "/img/coverkanan.jpg?w=1200&q=65",

    hero: [
      "/img/background.jpg?w=1200&q=65",
      "/img/background3.jpg?w=1200&q=65",
    ],

    circle: [
      "/img/crsl.jpg?w=200&h=200&fit=crop&q=65",
      "/img/crsl2.jpg?w=200&h=200&fit=crop&q=65",
      "/img/crsl1.jpg?w=200&h=200&fit=crop&q=65",
      "/img/background5.jpg?w=200&h=200&fit=crop&q=65",
    ],

    bride: [
      "/img/bride.jpg?w=600&h=600&fit=crop&q=65",
      "/img/bride1.jpg?w=600&h=600&fit=crop&q=65",
    ],
    groom: [
      "/img/groom.jpg?w=600&h=600&fit=crop&q=65",
      "/img/groom1.jpg?w=600&h=600&fit=crop&q=65",
    ],

    std: [
      "/img/std-kiri.jpg?w=800&h=600&fit=crop&q=65",
      "/img/std-kanan.jpg?w=800&h=600&fit=crop&q=65",
    ],
    stdBg: [
      "/img/background3.jpg?w=1200&q=65",
      "/img/coverkanan.jpg?w=1200&q=65",
    ],

    story: [
      "/img/story.jpg?w=900&h=600&fit=crop&q=65",
      "/img/story1.jpg?w=900&h=600&fit=crop&q=65",
    ],
    storyBg: [
      "/img/background5.jpg?w=1200&q=65",
      "/img/background2.jpg?w=1200&q=65",
    ],

    gallery: [
      "/img/background5.jpg?w=1200&q=65",
      "/img/background1.jpg?w=1200&q=65",
      "/img/background2.jpg?w=1200&q=65",
      "/img/background3.jpg?w=1200&q=65",
      "/img/background4.jpg?w=1200&q=65",
      "/img/coverkanan.jpg?w=1200&q=65",
      "/img/crsl2.jpg?w=1200&q=65",
    ],

    closing: [
      "/img/background.jpg?w=1200&q=65",
      "/img/background3.jpg?w=1200&q=65",
    ],
  },

  /* ---------- SUPABASE (ucapan) — opsional ---------- */
  supabase: {
    url: "https://qjuonhqqajuywtnlrupq.supabase.co",
    anonKey: "sb_publishable_KPsclwO--l39wQV33o_HTQ_XagyCgZS",
  },
} as const;

export type WeddingConfig = typeof wedding;
