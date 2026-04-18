# 🎓 SkripsiAI — Asisten Penyelesaian Skripsi

Platform produktivitas akademik berbasis AI untuk mahasiswa Indonesia. Dilengkapi integrasi **Google Apps Script** sebagai backend database ke **Google Spreadsheet**.

---

## 🏗️ Arsitektur Sistem

```
Browser (index.html)
    ↓  Anthropic API calls (perlu proxy backend)
Proxy Server / Backend
    ↓  API Key aman di server
Anthropic Claude API

Browser (index.html)
    ↓  Data CRUD (todo, literatur, progress)
Google Apps Script Web App
    ↓
Google Spreadsheet (database)
```

---

## 🚀 Setup Langkah demi Langkah

### LANGKAH 1 — Deploy Google Apps Script

1. Buka [Google Spreadsheet](https://sheets.google.com) → buat spreadsheet baru
2. Klik **Extensions → Apps Script**
3. Hapus kode default, **copy-paste seluruh isi `Code.gs`** ke editor
4. Klik **Save** (ikon disket)
5. Klik **Deploy → New Deployment**
6. Pilih type: **Web App**
7. Isi konfigurasi:
   - **Description**: SkripsiAI Backend
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** *(untuk akses publik tanpa login)*
8. Klik **Deploy** → izinkan akses saat diminta
9. **Copy URL Web App** yang muncul (format: `https://script.google.com/macros/s/xxx/exec`)

> ⚠️ Setiap kali mengubah kode `Code.gs`, harus deploy ulang dengan **"New Deployment"** atau **"Manage Deployments → Edit"**.

---

### LANGKAH 2 — Setup Proxy Backend untuk Anthropic API

> **Kenapa perlu proxy?** API Key Anthropic **TIDAK BOLEH** diekspos di kode frontend (JavaScript yang bisa dilihat user). Proxy backend menyimpan API key di server.

#### Opsi A: Netlify Functions (Gratis, Mudah)

1. Buat file `netlify/functions/ai.js`:
```javascript
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
      },
      body: ''
    };
  }

  const body = JSON.parse(event.body);
  
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  
  return {
    statusCode: response.status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data)
  };
};
```

2. Buat `netlify.toml`:
```toml
[build]
  functions = "netlify/functions"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

3. Deploy ke Netlify:
   - Push ke GitHub
   - Connect di [netlify.com](https://netlify.com)
   - Set Environment Variable: `ANTHROPIC_API_KEY = sk-ant-xxx...`

4. Update `index.html` baris `ANTHROPIC_API`:
```javascript
const ANTHROPIC_API = '/.netlify/functions/ai';
```

#### Opsi B: Vercel (Gratis, Mudah)

1. Buat `api/ai.js`:
```javascript
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
```

2. Deploy ke [vercel.com](https://vercel.com), set env var `ANTHROPIC_API_KEY`

3. Update di `index.html`:
```javascript
const ANTHROPIC_API = '/api/ai';
```

#### Opsi C: GitHub Pages (Static, Tanpa Backend)

Jika deploy di GitHub Pages (static hosting), **tidak bisa** menyimpan API key dengan aman. Anda perlu:
- Menggunakan Netlify/Vercel untuk fungsi serverless, **atau**
- Input API key langsung di modal Profil (mode development/personal saja — **jangan share URL ke publik**)

Tambahkan input API key di Profile Modal dan modifikasi `callAnthropicAPI`:
```javascript
// Di state:
state.apiKey = '';

// Di callAnthropicAPI, tambahkan header:
'x-api-key': state.apiKey,
'anthropic-version': '2023-06-01',
```

---

### LANGKAH 3 — Konfigurasi di Aplikasi

1. Buka `index.html` di browser (atau URL deployment)
2. Klik **avatar pengguna** di sidebar (bawah)
3. Isi form Profil:
   - Nama, Program Studi, Judul Skripsi
   - Paste **URL Apps Script** dari Langkah 1
4. Klik **Simpan Profil**
5. Data akan tersinkron ke Google Spreadsheet!

---

## 📁 Struktur File

```
skripsiAI/
├── index.html          # Aplikasi utama (all-in-one)
├── Code.gs             # Google Apps Script backend
└── README.md           # Dokumentasi ini
```

---

## ✨ Fitur Lengkap

| Fitur | Status | Keterangan |
|-------|--------|-----------|
| 🤖 AI via Anthropic API | ✅ | 17 tool aktif dengan prompt berbeda |
| 📊 Simpan ke Spreadsheet | ✅ | Via Google Apps Script |
| 💾 Auto-save Editor | ✅ | localStorage + debounce 1.5s |
| 📝 Smart Editor | ✅ | Rich text + word count |
| 🔒 AI Copilot (streaming) | ✅ | Panel chat dengan context editor |
| 📚 Manajemen Literatur | ✅ | CRUD + ekstrak ringkasan AI |
| ✅ Manajemen Revisi | ✅ | CRUD + group by kategori |
| 📈 Progress Tracker | ✅ | Per-bab dengan slider edit |
| 📂 Upload & Analisis Data | ✅ | CSV/XLSX → narasi Bab 4 |
| 🌙 Dark Mode | ✅ | Persistent di localStorage |
| 📱 Responsive Mobile | ✅ | Sidebar & copilot overlay |
| 🛡️ XSS Protection | ✅ | DOMPurify sanitization |
| 🔐 API Key Aman | ✅ | Via backend proxy |

---

## 🔧 Kustomisasi

### Mengganti Model AI
Di `index.html`, cari dan ubah:
```javascript
const ANTHROPIC_MODEL = 'claude-sonnet-4-20250514';
// Opsi lain: 'claude-opus-4-20250514' (lebih pintar), 'claude-haiku-4-5-20251001' (lebih cepat/murah)
```

### Menambah Tool Baru
Di array `TOOLS.planning` / `TOOLS.writing` / `TOOLS.finalisasi`:
```javascript
{ 
  id: 'my-tool',
  name: 'Nama Tool',
  icon: 'ph-icon-name',       // dari phosphor-icons
  iconBg: 'var(--green-l)',
  iconColor: 'var(--green)',
  desc: 'Deskripsi singkat.',
  prompt: (input) => `System prompt Anda dengan ${input}`
}
```

---

## 🐛 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| "HTTP 401" saat generate AI | API key salah atau tidak dikonfigurasi di proxy |
| "Failed to fetch" | CORS error — pastikan proxy backend berjalan |
| Data tidak tersimpan ke Spreadsheet | Cek URL Apps Script di Profil, pastikan sudah di-deploy ulang setelah perubahan |
| Apps Script error "You do not have permission" | Saat deploy, pilih "Anyone" pada "Who has access" |
| Editor konten hilang saat refresh | Normal jika localStorage dihapus. Hubungkan ke backend untuk persistensi penuh |

---

## 📜 Lisensi

MIT License — Bebas digunakan dan dimodifikasi untuk keperluan akademik maupun komersial.

---

*Dibuat dengan ❤️ untuk mahasiswa Indonesia yang sedang berjuang menyelesaikan skripsi.*
