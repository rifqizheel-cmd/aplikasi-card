# Jurnal Vibecoding & Rekayasa Perangkat Lunak

**Nama:** Muhammad Rifqi Alhilali

**Kelas:** 11

**Nama Proyek:** Aplikasi Daftar Fashion Outfit

---

## 🏗️ 1. Definisi Stack & Arsitektur

*Jelaskan perencanaan tingkat tinggi (high-level planning) dari aplikasimu sebelum mulai menulis kode.*

* **Lingkungan Pengembangan:** ReactJS dengan Vite
* **Styling:** CSS Murni / Tailwind CSS
* **Manajemen State:** useState
* **AI Code Editor / LLM Assistant:** ChatGPT

### Alasan Pemisahan Komponen

Saya memisahkan komponen agar kode lebih rapi, mudah dibaca, dan mudah digunakan kembali.

Contohnya:

* `Navbar` digunakan untuk bagian navigasi
* `OutfitCard` digunakan untuk menampilkan data fashion outfit
* `SearchBar` digunakan untuk fitur pencarian
* `Footer` digunakan untuk bagian bawah website

Struktur folder dibuat agar project lebih terorganisir dan memudahkan proses development.

```bash
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── OutfitCard.jsx
 │    ├── SearchBar.jsx
 │    └── Footer.jsx
 ├── data/
 │    └── outfits.js
 ├── pages/
 │    └── Home.jsx
 ├── App.jsx
 └── main.jsx
```

### Fitur yang Diimplementasikan

1. **Navbar Modern** - Navigasi dengan logo dan branding
2. **Search Bar** - Pencarian outfit berdasarkan nama atau deskripsi
3. **Filter Kategori** - Filter berdasarkan kategori (Atasan, Bawahan, Sepatu, Aksesoris, Tas)
4. **Card Outfit** - Tampilan card dengan icon fashion dari react-icons
5. **Hover Effect** - Animasi saat hover pada card
6. **Tombol Lihat Detail** - Button untuk melihat detail outfit
7. **Footer Sederhana** - Informasi pembuat dan tahun
8. **Animasi Ringan** - Fade in dan slide animations
9. **Empty State** - Pesan "Data outfit tidak tersedia" saat data kosong
10. **Responsive Design** - Mendukung desktop dan mobile

### Desain

* Warna dominan: hitam (#0f172a), putih, beige (#f5f5dc), skyblue (#87ceeb)
* Card rounded dengan border-radius 1.5rem
* Shadow halus untuk kedalaman visual
* Typography modern dengan font Inter
* Layout menggunakan CSS Grid dan Flexbox

### Teknologi yang Digunakan

* React JS 18.2.0
* Vite 5.1.0
* react-icons 5.6.0
* CSS Murni dengan CSS Variables

---

## 📝 Catatan Pengembangan

Project ini dibuat menggunakan konsep Array of Objects yang di-render menggunakan method `.map()`. Data outfit disimpan dalam file `src/data/outfits.js` dan di-import ke component Home untuk dilakukan filtering dan searching.