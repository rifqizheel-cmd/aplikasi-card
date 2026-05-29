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

```bash id="3sl5qi"
src/
 ├── components/
 ├── data/
 ├── pages/
 ├── App.jsx
 └── main.jsx
```
