# Aplikasi Sistem Inventaris Produk (Node.js & MySQL)

Proyek ini merupakan aplikasi web sistem inventaris produk sederhana yang dibangun menggunakan arsitektur **MVC (Model-View-Controller)** dengan **Node.js**, **Express.js**, dan **MySQL**. Aplikasi ini mengimplementasikan operasi CRUD lengkap, pencegahan celah keamanan SQL Injection menggunakan *Prepared Statements*, serta penanganan alur formulir dengan pola *Post-Redirect-Get* (PRG).

---

## 👤 Data Mahasiswa

* **Nama Lengkap:** I Komang Dika Gus Septa
* **NIM:** 42530015
* **Mata Kuliah:** Pemrograman Web (Tugas 3)

---

## 📹 Tautan Video Walkthrough (YouTube)

Demonstrasi lengkap mengenai fungsi CRUD, sinkronisasi *real-time* ke database phpMyAdmin, serta bedah kode sumber telah diunggah ke YouTube dengan status **Publik**:

* **Judul Video:** `I Komang Dika Gus Septa - 42530015 - Presentasi Proyek Inventaris Produk (Pemrograman Web)`
* **Link YouTube:** https://youtu.be/PiRSMrrlf_Y?si=MtiaFQTzpZtCSwxu
---

## 🛠️ Ringkasan Fitur & Spesifikasi Teknis

1. **Arsitektur MVC (Model-View-Controller)**
   * Struktur kode dipisah secara bersih antara *route*, *controller* (`produkController.js`), dan *view* (EJS templates).
2. **Operasi CRUD Lengkap & Real-Time Sync**
   * **Create:** Menambah data produk baru melalui formulir input.
   * **Read:** Menampilkan daftar seluruh produk yang diambil langsung dari database.
   * **Update:** Mengubah detail data produk yang ada.
   * **Delete:** Menghapus baris produk dari sistem dan database secara instan.
3. **Keamanan Prepared Statements**
   * Seluruh pengeksekusian kueri SQL menggunakan *placeholders* (`?`) untuk memisahkan struktur kueri dari data input pengguna demi mencegah celah serangan **SQL Injection**.
4. **Pola Post-Redirect-Get (PRG)**
   * Menggunakan `res.redirect('/produk')` pada rute `POST` setelah proses mutasi data agar terhindar dari pengiriman formulir ganda (*double submission*) saat halaman di-*refresh*.

---

## 📁 Struktur Berkas Utama

```text
pemweb-tugas3-42530015/
├── controllers/
│   └── produkController.js    # Pengendali logika bisnis & CRUD
├── routes/
│   └── produkRoutes.js        # Pemetaan rute HTTP
├── views/
│   ├── produk-edit.ejs        # Tampilan formulir ubah data
│   └── footer.ejs             # Komponen tata letak
├── .env                       # Konfigurasi variabel lingkungan lokal
├── .env.example               # Contoh struktur variabel lingkungan
├── database.sql               # Skrip skema & data awal MySQL
├── app.js / server.js         # Berkas utama entri server Node.js
└── README.md                  # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

1. **Clone Repositori:**
   ```bash
   git clone https://github.com/I-Komang-Dika-Gus-Septa/Pemweb-Tugas3-42530015
   ```

2. **Pasang Dependensi:**
   ```bash
   npm install
   ```

3. **Impor Skema Database:**
   * Buka **phpMyAdmin** atau MySQL Client kamu.
   * Buat database baru (misal: `db_inventaris_produk`).
   * Impor dan eksekusi file `database.sql` yang tersedia di akar direktori proyek.

4. **Konfigurasi Variabel Lingkungan (`.env`):**
   * Buat atau sesuaikan berkas `.env` berpatokan pada `.env.example`:
     ```env
     PORT=3000
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=
     DB_NAME=db_inventaris_produk
     DB_PORT=3306
     ```

5. **Jalankan Aplikasi:**
   ```bash
   npm run dev
   ```
   * Akses aplikasi melalui peramban web pada alamat `http://localhost:3000`.