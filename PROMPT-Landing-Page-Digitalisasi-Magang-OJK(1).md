# PROMPT: Landing Page Storytelling — Digitalisasi Pendaftaran Magang OJK Kalsel

Buatkan saya sebuah **landing page presentasi** (bukan landing page marketing biasa) yang akan saya gunakan sebagai materi presentasi langsung di depan penguji/pembimbing magang. Website ini menggantikan PowerPoint — jadi setiap section harus terasa seperti "slide" yang matang, storytelling-nya jelas, dan enak untuk dinavigasikan saat presentasi live.

---

## 1. KONTEKS PROJECT (WAJIB DIPAHAMI SEBELUM BUILD)

Saya seorang mahasiswa magang di **OJK Kalimantan Selatan**. Project akhir magang saya adalah mendigitalisasi proses pendaftaran magang yang selama ini manual.

**Problem nyata (real problem, bukan asumsi):**
- Pelamar harus menyerahkan berkas fisik (CV, surat lamaran, transkrip) langsung ke mailroom kantor.
- Setelah menyerahkan berkas, pelamar **tidak punya cara untuk tahu status lamarannya** — bahkan jika ditolak, seringkali sama sekali tidak ada pemberitahuan.
- Admin harus membalas email/menghubungi pelamar satu per satu secara manual.

**Solusi yang saya bangun:**
Sistem sederhana berbasis **Google Form + Google Spreadsheet + Google Apps Script** (otomasi email). Alurnya:
1. Pelamar mengisi formulir pendaftaran daring (nama, email, no HP, universitas, upload CV/surat lamaran/transkrip).
2. Data otomatis tersimpan ke spreadsheet, pelamar langsung menerima email konfirmasi otomatis.
3. Admin membuka spreadsheet, mengecek kelengkapan berkas, lalu memilih status pelamar lewat dropdown (Review / Diterima / Ditolak).
4. Setelah status dipilih, sistem otomatis mengirim email notifikasi sesuai status — admin tidak perlu menulis email manual.
5. Pelamar bisa mengecek status lamarannya sendiri kapan saja dengan memasukkan email yang didaftarkan.

**Status project saat ini: SUDAH BERJALAN (bukan konsep/rencana).** Ini adalah versi uji coba yang sudah diuji dengan data contoh dan seluruh alurnya terbukti berfungsi. QR code menuju Google Form-nya bahkan **sudah ditempel secara fisik di depan mailroom kantor** — jadi ini nyata, bukan mockup. Langkah selanjutnya yang masih diperlukan: koordinasi dengan tim HR/Mailroom soal kepemilikan akses, dan migrasi ke domain email resmi OJK.

**Manfaat per pihak:**
- **Pelamar:** selalu dapat kejelasan status (termasuk saat ditolak), tidak perlu datang ke kantor, bisa cek mandiri kapan saja.
- **Admin:** tidak perlu balas satu-satu, semua data tersimpan rapi di satu tempat, mudah dicari/disortir.
- **Organisasi (OJK):** kesan lebih profesional (setara pengalaman melamar di perusahaan besar), jadi contoh awal digitalisasi proses administratif lain yang masih manual.

**Link nyata yang harus ditampilkan dan BISA DIKLIK (buka tab baru):**
- Google Form: `https://docs.google.com/forms/d/1qlc2TROGHXOHoCuUp5FpD8aapJ-DtuJBD1zyhlBXtJI/edit`
- Google Spreadsheet: `https://docs.google.com/spreadsheets/d/1S8lNg0qDYzySVRqal5NXrE-7_YHgtuys79_30zTYdrQ/edit?gid=1612123886#gid=1612123886`
- Google Apps Script: `https://script.google.com/macros/s/AKfycbzeNPd1gGRKsbY2Ig6tteT35LmmGbP8EYyEWP5xDL_X4dqAVBu_4kX8MsfWtMbfb-p7/exec`
- Email sistem notifikasi: `magangojkkalsel@gmail.com`

> ⚠️ Catatan link Google Form/Spreadsheet ini adalah dokumen **/edit** milik admin (bukan link publik "isi form"). Tolong beri label yang jujur di UI, misalnya "Lihat Form (akses admin)" / "Lihat Spreadsheet (akses admin)" supaya tidak menyesatkan audiens — atau sediakan dua slot link (view-only publik vs admin) yang bisa saya isi salah satunya nanti.

---

## 2. FORMAT & MODE PRESENTASI (PALING PENTING)

Ini **bukan** single-page scroll biasa. Bangun sebagai **multi-section presentation mode**, seperti slide deck digital:

- Setiap section = satu "slide" full-viewport (`height: 100vh`), presentasi berpindah section per section.
- Navigasi: tombol **Next/Prev** (panah kiri-kanan di layar), **keyboard arrow keys** (←/→ atau ↑/↓) untuk pindah slide, dan **dot/step indicator** di sisi layar (misalnya kanan tengah) yang menunjukkan sedang di section keberapa dari total, sekaligus bisa diklik untuk lompat langsung ke section tertentu.
- Transisi antar section pakai animasi smooth (slide transition atau fade+translate), jangan cuma jump/cut kasar.
- Tambahkan progress bar tipis di bagian atas/bawah layar yang menunjukkan sudah sejauh mana presentasi berjalan.
- Harus tetap bisa discroll normal sebagai fallback (untuk mobile/kalau dibuka bukan saat presentasi), tapi mode utamanya adalah "klik next / panah keyboard" ala slide.
- Sertakan opsional: nomor section kecil di pojok (misal "03 / 07") supaya saya sebagai presenter tahu posisi tanpa harus lihat layar audiens.

---

## 3. GAYA VISUAL & WARNA (SESUAI OJK)

- Palet warna resmi **OJK**: merah tua/maroon sebagai warna utama (`#8B1A1A` – `#A61C1C` range, sesuaikan ke merah OJK yang lebih presisi jika memungkinkan), dipadukan putih bersih dan aksen abu gelap untuk teks. Hindari warna random di luar identitas ini.
- Tipografi: judul besar dan tebal (bold, sans-serif modern — misalnya Inter, Poppins, atau Manrope), body text bersih dan mudah dibaca dari jarak (karena ini akan ditampilkan di proyektor saat presentasi — pastikan ukuran font cukup besar, jangan kekecilan).
- Gunakan card dengan solid background merah untuk poin-poin penting (bukan hanya outline/border tipis), seperti gaya proposal bisnis korporat formal.
- **Jangan gunakan garis aksen tipis di bawah judul (underline decorative)** — pakai whitespace atau blok warna solid sebagai pemisah visual, ini kesannya lebih premium dan tidak generik/AI-generated look.
- **Jangan pakai stripe/bar warna dekoratif di pinggir card atau slide** — kalau butuh penekanan visual pakai shadow halus, background tint, atau icon, bukan garis pinggir.
- Desain harus terasa formal dan kredibel (ini dipresentasikan ke pihak OJK), tapi tetap modern — hindari kesan template PowerPoint kaku tahun 2010-an.

---

## 4. STRUKTUR SECTION (7 "SLIDE" DIGITAL)

### Section 1 — Cover / Hook
- Judul besar: **"Digitalisasi Pendaftaran Magang"**, sub-judul "OJK Kalimantan Selatan"
- Tagline singkat yang jadi hook: sesuatu seperti "Dari berkas fisik yang hilang tanpa kabar, menjadi sistem yang transparan dan terukur."
- Nama saya (Muhammad Fajar Nuzuli) dan tanggal sebagai penulis project.
- Foto gedung OJK sebagai visual latar (beri overlay gradient merah tua supaya teks tetap terbaca).
- Indikator scroll/next yang jelas untuk memulai presentasi.

### Section 2 — Problem (Real Problem)
- Judul: "Masalah yang Nyata Terjadi"
- Buka dengan pernyataan problem yang tajam dan personal (bukan generic corporate speak).
- masalah, masing-masing dengan icon berbeda:
  1. Berkas fisik harus diantar langsung ke mailroom
  2. Tidak ada kejelasan status — bahkan saat ditolak
- Sertakan elemen visual pendukung: ilustrasi generated-AI bergaya flat minimalis (pelamar membawa tumpukan dokumen fisik, bingung di depan kantor), dengan palet merah-putih. **Sediakan placeholder image dengan komentar/prompt AI image generation di dalam kode**, supaya saya bisa generate dan tempel filenya nanti.

### Section 3 — Solusi & Cara Kerja Sistem (Workflow Interaktif) ⭐ SECTION UTAMA
Ini section paling penting, harus paling niat dikerjakan:
- Judul: "Bagaimana Sistem Ini Bekerja"
- Tampilkan **5 langkah alur kerja sebagai horizontal step-flow interaktif**, masing-masing langkah punya:
  - Icon representatif (gunakan icon library seperti lucide-react/heroicons — pastikan icon-nya benar-benar merepresentasikan aksinya, bukan generic)
  - Nomor urut jelas (01–05)
  - Judul singkat + deskripsi 1-2 kalimat
  - Tool yang dipakai di step itu (Google Form / Google Sheets / Apps Script / Gmail)
- **Animasi:** saat section ini aktif/masuk viewport, step-step muncul berurutan (staggered animation, misal fade+slide-up satu-satu dengan delay), dan garis/connector antar step "tergambar" (path drawing animation) mengikuti urutan — beri kesan alur data mengalir dari step 1 ke step 5.
- Idealnya interaktif: hover atau klik tiap step untuk expand detail lebih lanjut (misalnya klik step 3 "Admin Review" memunculkan detail tambahan tentang dropdown status).
- 5 Langkah:
  1. **Isi Formulir** (icon: form/file-text) — Pelamar mengisi data diri & upload CV, surat lamaran, transkrip nilai. Tool: Google Form.
  2. **Tersimpan Otomatis** (icon: database/cloud-upload) — Data otomatis masuk ke spreadsheet, email konfirmasi terkirim ke pelamar. Tool: Google Sheets.
  3. **Admin Review** (icon: search-check/clipboard-check) — Admin mengecek kelengkapan berkas, memilih status via dropdown (Review/Diterima/Ditolak). Tool: Google Sheets.
  4. **Notifikasi Otomatis** (icon: mail/bell) — Sistem otomatis menyusun & mengirim email sesuai status terpilih. Tool: Google Apps Script.
  5. **Cek Status Mandiri** (icon: search/user-check) — Pelamar dapat mengecek status kapan saja dengan memasukkan email pendaftaran. Tool: Google Apps Script + Form.
- Di bawah/samping alur, tampilkan **screenshot asli** sistem (saya akan sediakan filenya — beri slot image jelas untuk): (a) tampilan Google Form, (b) tampilan spreadsheet kolom data pelamar, (c) tampilan spreadsheet kolom dropdown status. Tampilkan dalam frame/mockup browser supaya terlihat profesional, bukan screenshot mentah.
- Tambahkan tombol/link **"Buka Google Form"**, **"Buka Spreadsheet"**, **"Lihat Apps Script"** yang benar-benar mengarah ke link asli di atas (target="_blank"), didesain sebagai button jelas bukan link teks biasa.

### Section 4 — Bukti Nyata (Bukti Fisik / Real World Proof)
- Judul: "Ini Bukan Sekadar Konsep — Sudah Berjalan"
- Tekankan project ini **sudah live**, bukan rencana.
- Tampilkan foto QR code yang sudah ditempel fisik di depan mailroom sebagai bukti utama (saya akan upload foto aslinya — **sediakan slot image dengan caption "QR Code Pendaftaran — Terpasang di Mailroom OJK Kalimantan Selatan"**, styling seperti polaroid/foto dokumentasi lapangan supaya terasa autentik, bisa dengan sedikit rotasi/tilt natural dan shadow).
- Tambahkan keterangan singkat: siapa saja bisa scan QR ini langsung dari mailroom dan mendaftar dalam hitungan menit.

### Section 5 — Dampak Terukur (Measurable Impact, Before/After + KPI)
- Judul: "Dampaknya, Terukur"
- Tabel/kartu **before vs after** side-by-side (styling kontras: kolom "Sebelum" abu-abu muted, kolom "Sesudah" merah OJK menonjol):

| Aspek | Sebelum | Sesudah |
|---|---|---|
| Cara mendaftar | Serahkan berkas fisik ke mailroom | Isi formulir daring dari mana saja |
| Cek status | Tidak tersedia, harus tanya langsung | Cek mandiri kapan saja, real-time |
| Kabar hasil | Sering tanpa pemberitahuan sama sekali | Notifikasi otomatis setiap status berubah |

- Tambahkan **4 KPI card dengan angka besar** (animated counter — angka naik dari 0 ke nilai akhir saat section masuk viewport), beri label jelas **"Estimasi awal"** di bawah tiap angka karena ini proyeksi, bukan data resmi final:
  1. **~80–90%** pengurangan waktu proses administrasi per pelamar (dari estimasi ±3-5 hari kerja manual menjadi hitungan menit-jam untuk konfirmasi otomatis)
  2. **100%** pelamar menerima notifikasi status (dari sebelumnya seringkali 0% pemberitahuan saat ditolak)
  3. **0 rupiah** biaya tambahan sistem (dibangun full pakai Google Workspace gratis)
  4. **1 tempat** — seluruh data pelamar terpusat di satu spreadsheet (dari sebelumnya tersebar di email/berkas fisik terpisah)
  
  *(Angka-angka ini estimasi wajar berdasarkan logika proses, beri saya bagian yang gampang diedit di kode karena saya akan sesuaikan setelah punya data riil.)*

### Section 6 — Status & Langkah Selanjutnya
- Judul: "Sejauh Ini, dan Selanjutnya"
- Status saat ini: sistem sudah berjalan penuh sebagai versi uji coba, diuji dengan data contoh, seluruh alur terbukti berfungsi.
- Roadmap singkat ke depan (bisa pakai simple timeline horizontal): koordinasi akses dengan tim HR/Mailroom → migrasi ke domain email resmi OJK → potensi perluasan ke proses administratif lain.
- Nada bagian ini: percaya diri dan realistis, bukan berlebihan — ini project kecil tapi nyata dan berfungsi.

### Section 7 — Penutup
- "Terima Kasih" besar, dengan nama saya (Muhammad Fajar Nuzuli) dan role (peserta magang OJK Kalimantan Selatan).
- Ulangi tombol link cepat ke Google Form/Spreadsheet/Apps Script sebagai closing call-to-action untuk audiens yang mau eksplorasi langsung.
- Foto gedung OJK lagi sebagai penutup visual (konsisten dengan cover, "closing the loop").

---

## 5. INTERAKSI & ANIMASI (WAJIB, TAPI JANGAN BERLEBIHAN)

- Gunakan animasi scroll-reveal/on-enter-viewport untuk tiap section (misalnya via Intersection Observer atau library seperti Framer Motion) — elemen muncul dengan fade+slide, bukan langsung nongol statis.
- Section workflow (Section 3) harus paling hidup: staggered reveal + connector line animation.
- Angka KPI di Section 5 wajib animated counting up.
- Hover state jelas di semua tombol dan card interaktif (scale halus, shadow bertambah, warna sedikit shift) — beri feedback bahwa elemen itu bisa diklik.
- Transisi antar section (saat pindah slide) harus smooth, bukan cut kasar — pakai transisi fade-slide dengan durasi wajar (~400-600ms), jangan terlalu lama sampai terasa lag saat presentasi live.
- **Jangan berlebihan** — animasi harus mendukung storytelling, bukan bikin audiens pusing atau menunggu lama. Prioritaskan clarity di atas "wah" factor.

---

## 6. ASET YANG PERLU DISEDIAKAN SLOT-NYA (SAYA AKAN UPLOAD MANUAL)

Tolong buat struktur folder/import gambar yang jelas dan gampang saya ganti, dengan nama file yang deskriptif, untuk:
1. Foto gedung OJK (cover & closing)
2. Screenshot Google Form asli
3. Screenshot spreadsheet — kolom data pelamar
4. Screenshot spreadsheet — kolom dropdown status
5. **Foto QR code yang sudah ditempel di mailroom (real photo, bukan ilustrasi)** — ini aset paling penting di Section 4, styling sebagai foto dokumentasi lapangan asli
6. Ilustrasi AI-generated untuk Section 2 (problem) — sertakan komentar prompt generation di kode untuk referensi saya

---

## 7. TECH STACK REKOMENDASI

- React + Tailwind CSS (utility classes standar saja, styling custom untuk warna OJK via CSS variables/theme config)
- Framer Motion untuk animasi (scroll reveal, staggered children, page/section transitions, animated counter)
- Icon set: Lucide React (pilih icon yang representatif per workflow step, bukan generic)
- Struktur komponen per section terpisah (`Section1Cover.jsx`, `Section2Problem.jsx`, dst) supaya saya gampang edit konten satu-satu tanpa bongkar semua
- Responsive: prioritas utama tetap desktop/proyektor (karena dipresentasikan), tapi pastikan tidak rusak total di mobile/tablet sebagai fallback scroll biasa

---

## 8. TONE KESELURUHAN

Formal tapi bukan kaku — ini project mahasiswa magang yang dikerjakan serius dan sudah berfungsi nyata di lapangan. Storytelling harus terasa jujur: mulai dari masalah yang benar-benar dialami pelamar, solusi yang applicable dan murah (bukan over-engineered), sampai bukti bahwa ini sudah berjalan di dunia nyata (QR code di mailroom), bukan cuma demo di laptop. Hindari bahasa korporat generic/buzzword kosong — gunakan bahasa yang spesifik dan konkret sesuai isi project.
