# Jurnal Vibecoding & Rekayasa Perangkat Lunak

**Nama:** Muhammad Rifqi Alhilali

**Kelas:** 11

**Nama Proyek:** To-Do List

---

## 🏗️ 1. Definisi Stack & Arsitektur

*Jelaskan perencanaan tingkat tinggi (high-level planning) dari aplikasimu sebelum mulai menulis kode. Seorang arsitek perangkat lunak harus tahu alat apa yang dipakai dan di mana meletakkannya.*

* **Lingkungan Pengembangan:** ReactJS dengan Vite
* **Routing:** Single Page Application (tanpa router - aplikasi sederhana)
* **Styling:** CSS Murni dengan CSS Variables
* **Manajemen State:** useState & localStorage
* **AI Code Editor / LLM Assistant:** ChatGPT / OpenCode

### Alasan Pemisahan Komponen

Saya memisahkan komponen agar kode lebih rapi, mudah dibaca, dan mudah digunakan kembali.

Contohnya:

* `Navbar` digunakan untuk bagian navigasi atas
* `TodoForm` digunakan untuk menambahkan tugas dan search/filter
* `TodoItem` digunakan untuk menampilkan setiap tugas
* `TodoList` digunakan untuk menampilkan daftar tugas
* `Footer` digunakan untuk bagian bawah website

Struktur folder dibuat agar project lebih terorganisir dan memudahkan proses development.

```bash
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── TodoForm.jsx
 │    ├── TodoItem.jsx
 │    ├── TodoList.jsx
 │    └── Footer.jsx
 ├── pages/
 │    └── Home.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 🗣️ 2. Strategi Prompting

### Prompt 1 (Fokus pada Logika / State)

> "Buatkan fitur tambah dan hapus tugas pada React JS menggunakan useState, spread operator, dan filter."

### Prompt 2 (Fokus pada UI / Routing)

> "Buatkan UI To-Do List modern menggunakan React JS dengan desain clean, responsive, hover effect, dan dark mode."

### Hasil Evaluasi Prompt

AI cukup membantu dalam membuat struktur dasar aplikasi dan fitur utama seperti add task dan delete task. Namun beberapa bagian seperti styling dan localStorage masih perlu penyesuaian manual agar berjalan sesuai kebutuhan aplikasi.

---

## 🐛 3. Log Problem Solving

### Deskripsi Error / Bug

Data tugas hilang ketika halaman browser di-refresh.

> Masalah terjadi karena data state belum disimpan ke localStorage.

### Langkah Investigasi

Saya menggunakan `console.log()` untuk memastikan data tugas berhasil masuk ke state dan mengecek apakah localStorage sudah menerima data.

### Kolaborasi dengan AI

> "Perbaiki React To-Do List agar data tersimpan di localStorage dan tetap muncul setelah refresh halaman."

### Solusi Akhir

Ternyata saya harus menggunakan `useEffect` untuk menyimpan data tugas ke localStorage setiap kali state berubah dan mengambil kembali data saat aplikasi pertama kali dimuat.

```javascript
const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

---

## 🎯 4. Refleksi Pribadi

Setelah mengerjakan project ini dengan metode Vibecoding, saya belajar bahwa AI dapat membantu mempercepat proses coding dan debugging. Namun manusia tetap menjadi pihak yang menentukan struktur aplikasi, alur fitur, dan keputusan utama dalam pengembangan project.

Beberapa hal yang saya pelajari:

1. **State Management** - Memahami bagaimana useState bekerja dan kapan harus menggunakan useEffect
2. **localStorage** - Data tidak akan hilang saat refresh karena disimpan di browser storage
3. **Component Architecture** - Memisahkan kode menjadi komponen yang lebih kecil memudahkan maintenance
4. **CSS Styling** - Desain modern dengan dark theme memerlukan konsistensi warna dan spacing

---

## 📁 Fitur yang Diimplementasikan

- ✅ Tambah tugas menggunakan Spread Operator
- ✅ Hapus tugas menggunakan .filter()
- ✅ Toggle status selesai
- ✅ Search tugas
- ✅ Filter (Semua, Selesai, Belum Selesai)
- ✅ localStorage persistence
- ✅ Pesan "Belum ada tugas" saat data kosong
- ✅ Responsive design (desktop & mobile)
- ✅ Animasi dan hover effect
- ✅ Dark mode theme
