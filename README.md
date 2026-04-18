# 🎓 SkripsiAI — Asisten Penyelesaian Skripsi

Platform AI untuk mahasiswa Indonesia. **100% gratis** — berjalan di GitHub Pages, data tersimpan di browser + Google Spreadsheet.

---

## ✅ Tidak Butuh Server, Tidak Berbayar

| Kebutuhan | Solusi Gratis |
|-----------|--------------|
| Hosting web | GitHub Pages (gratis selamanya) |
| AI (Claude) | Anthropic API Key (input di app) |
| Database | Google Spreadsheet via Apps Script |
| Backend | Tidak perlu! |

---

## 🚀 Cara Deploy (15 menit)

### 1. Upload ke GitHub Pages

1. Buat repository baru di GitHub (nama bebas, misal `skripsiAI`)
2. Upload file `index.html` dan `Code.gs` ke root repo
3. Masuk **Settings → Pages**
4. Source: **Deploy from a branch** → Branch: `main` → folder: `/ (root)`
5. Klik **Save** → tunggu ~1 menit
6. Akses di: `https://username-kamu.github.io/skripsiAI`

### 2. Dapatkan API Key Anthropic (Gratis)

1. Daftar di [console.anthropic.com](https://console.anthropic.com)
2. Masuk menu **API Keys → Create Key**
3. Copy key-nya (format: `sk-ant-api03-...`)
4. Simpan baik-baik — hanya tampil sekali!

> **Catatan biaya:** Anthropic memberi kredit gratis untuk akun baru. Pemakaian skripsi normal sangat hemat (biasanya < $1/bulan).

### 3. Setup di Aplikasi

1. Buka URL GitHub Pages Anda
2. Klik **avatar** di pojok kiri bawah sidebar
3. Isi form:
   - Nama, Prodi, Judul Skripsi
   - **API Key** → paste `sk-ant-api03-...`
4. Klik **Simpan**
5. Langsung bisa dipakai! 🎉

### 4. (Opsional) Hubungkan Google Spreadsheet

Agar data tersimpan permanen di cloud, bukan hanya di browser:

1. Buka [Google Spreadsheet](https://sheets.google.com) → buat spreadsheet baru
2. Klik **Extensions → Apps Script**
3. Hapus semua kode, paste isi file `Code.gs`
4. Klik **Deploy → New Deployment**
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy URL yang muncul
6. Paste di app → Profil → kolom **Google Apps Script URL**

---

## 🔒 Keamanan API Key

API Key Anda **tersimpan hanya di `localStorage` browser Anda sendiri** — tidak dikirim ke server manapun selain langsung ke `api.anthropic.com`.

**Tips aman:**
- Jangan buka aplikasi di komputer orang lain yang tidak dipercaya
- Jangan share URL sambil screen recording dengan DevTools terbuka
- Bisa set **Usage Limit** di dashboard Anthropic agar tidak over-budget

---

## ✨ Fitur Lengkap

- **17 Tool AI** — Generator judul, kerangka berpikir, parafrase, abstrak, prediksi sidang, dll
- **Smart Editor** — Rich text dengan word count & AI Copilot streaming
- **Manajemen Literatur** — CRUD + ekstrak ringkasan otomatis
- **Manajemen Revisi** — To-do list per dosen pembimbing
- **Progress Tracker** — Pantau progress per bab
- **Analisis Data** — Upload CSV/XLSX → narasi Bab 4
- **Dark Mode** — Persistent
- **Responsive** — Mobile friendly

---

## 📁 Struktur File

```
skripsiAI/
├── index.html    ← Seluruh aplikasi (upload ke GitHub)
├── Code.gs       ← Google Apps Script (copy-paste ke Apps Script)
└── README.md
```

---

*Gratis. Selamanya. Semangat skripsinya! 💪*
