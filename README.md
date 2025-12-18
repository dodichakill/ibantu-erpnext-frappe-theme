# 🎨 Ibantu Theme - Modern Yellow Theme for ERPNext

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![ERPNext](https://img.shields.io/badge/ERPNext-Compatible-yellow)](https://erpnext.com)
[![Frappe](https://img.shields.io/badge/Frappe-Framework-yellow)](https://frappeframework.com)
[![Version](https://img.shields.io/badge/version-1.0.2-yellow.svg)](https://github.com/dodichakill/ibantu-erpnext-frappe-theme/releases)

**Ibantu Theme** adalah custom app untuk Frappe/ERPNext yang menyediakan tema modern dengan skema warna kuning yang elegan dan menarik. Tema ini dirancang untuk memberikan pengalaman pengguna yang lebih baik dengan desain yang modern dan profesional.

> **✅ Latest Update (v1.0.2):** Fixed pip installation error - now installs perfectly!

![Ibantu Theme Preview](https://via.placeholder.com/800x400/FFD700/332B00?text=Ibantu+Modern+Yellow+Theme)

## ✨ Fitur Utama

- 🎨 **2 Tema Warna Kuning Modern**
  - **Ibantu Golden**: Tema dark dengan aksen golden yellow yang profesional dan elegan
  - **Ibantu Canary**: Tema dark dengan canary yellow yang cerah dan energik
- 🌙 **Dark Mode Optimized**: Dirancang khusus untuk penggunaan jangka panjang
- 💫 **Modern UI/UX**: Animasi halus, efek hover, dan transisi yang smooth
- 🎯 **Profesional & Elegan**: Cocok untuk lingkungan kerja profesional
- ⚡ **Performance**: Ringan dan cepat, tidak membebani sistem
- 🔧 **Fully Customizable**: Mudah disesuaikan dengan kebutuhan Anda

## 📸 Screenshots

### Ibantu Golden Theme

Tema dengan golden yellow yang sophisticated dan profesional.

### Ibantu Canary Theme

Tema dengan canary yellow yang vibrant dan modern.

## 🚀 Instalasi

⚠️ **IMPORTANT**: Build error saat install adalah **NORMAL** dan tidak masalah!  
📖 Baca penjelasan lengkap: [BUILD_ERROR_EXPLANATION.md](BUILD_ERROR_EXPLANATION.md)

### Persyaratan

- Frappe Framework (versi 13 atau lebih baru)
- ERPNext (opsional, tetapi direkomendasikan)

### Langkah Instalasi

1. **Pastikan Anda sudah menginstall Frappe dan ERPNext**

2. **Get app (build error AKAN MUNCUL - ini NORMAL!)**

   ```bash
   cd /path/to/frappe-bench
   bench get-app https://github.com/dodichakill/ibantu-erpnext-frappe-theme.git
   
   # Build error akan muncul - ABAIKAN!
   # App sudah terinstall dengan benar meskipun ada error
   ```

3. **Install app ke site Anda**

   ```bash
   bench --site your-site-name install-app ibantu_theme
   ```

   **✨ Catatan:** Tidak perlu menjalankan `bench build` karena app sudah menggunakan file CSS/JS siap pakai!

4. **Restart Frappe instance Anda**

   ```bash
   bench restart
   ```

   Atau untuk development:

   ```bash
   bench start
   ```

5. **Aktifkan tema**
   - Login ke ERPNext/Frappe
   - Klik icon profile di kanan atas
   - Pilih "Switch Theme" atau "Ganti Tema"
   - Pilih salah satu:
     - **Ibantu Golden** - untuk tampilan profesional dengan golden yellow
     - **Ibantu Canary** - untuk tampilan vibrant dengan canary yellow

## 🎨 Tema yang Tersedia

### 1. Ibantu Golden

Tema dark mode dengan skema warna **golden yellow** yang memberikan kesan:

- ✅ Profesional dan elegan
- ✅ Cocok untuk penggunaan bisnis
- ✅ Kontras yang nyaman untuk mata
- ✅ Aksen emas yang sophisticated

**Warna Utama:**

- Primary: `#E6B800` (Golden Yellow)
- Background: `#332900` (Dark)
- Accent: `#FFDB66` (Light Golden)

### 2. Ibantu Canary

Tema dark mode dengan skema warna **canary yellow** yang memberikan kesan:

- ✅ Energik dan modern
- ✅ Bright dan cheerful
- ✅ Perfect untuk creative work
- ✅ Eye-catching design

**Warna Utama:**

- Primary: `#FFD700` (Canary Yellow)
- Background: `#332B00` (Dark)
- Accent: `#FFE433` (Bright Yellow)

## 🔧 Kustomisasi

### Mengubah Warna Tema

Anda dapat menyesuaikan warna tema dengan mengedit file SCSS:

1. **Untuk Ibantu Golden:**
   Edit file: `ibantu_theme/public/scss/ibantu-golden.scss`

2. **Untuk Ibantu Canary:**
   Edit file: `ibantu_theme/public/scss/ibantu-canary.scss`

Setelah melakukan perubahan, rebuild assets:

```bash
bench build --app ibantu_theme
bench restart
```

### Menambahkan Tema Baru

1. Buat file SCSS baru di `ibantu_theme/public/scss/`
2. Tambahkan import di `ibantu_theme/public/scss/ibantu.bundle.scss`
3. Update `ibantu_theme/public/js/theme-switcher.js` untuk menambahkan opsi tema
4. Update `ibantu_theme/overrides/user/user.py` untuk whitelist tema baru

## 🛠️ Development

### Build untuk Development

```bash
bench --site your-site-name clear-cache
bench build --app ibantu_theme
bench restart
```

### Watch Mode untuk Development

```bash
bench watch
```

## 📦 Struktur Project

```
ibantu_theme/
├── ibantu_theme/
│   ├── __init__.py
│   ├── hooks.py
│   ├── modules.txt
│   ├── config/
│   │   ├── desktop.py
│   │   └── docs.py
│   ├── overrides/
│   │   └── user/
│   │       └── user.py
│   └── public/
│       ├── js/
│       │   ├── theme-switcher.js
│       │   └── ibantu.bundle.js
│       └── scss/
│           ├── ibantu-golden.scss
│           ├── ibantu-canary.scss
│           └── ibantu.bundle.scss
├── setup.py
├── requirements.txt
├── MANIFEST.in
├── license.txt
└── README.md
```

## 🤝 Contributing

Kontribusi sangat diterima! Jika Anda memiliki ide untuk tema baru atau perbaikan, silakan:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Changelog

### Version 1.0.0 (2024-12-18)

- 🎉 Initial release
- ✨ Added Ibantu Golden theme
- ✨ Added Ibantu Canary theme
- 🎨 Modern UI/UX with smooth animations
- 💫 Enhanced theme switcher
- 📱 Responsive design

## 🐛 Troubleshooting

### Tema tidak muncul di Theme Switcher

```bash
bench --site your-site-name clear-cache
bench build --app ibantu_theme
bench restart
```

### Warna tidak berubah setelah memilih tema

1. Hard refresh browser (Ctrl+Shift+R atau Cmd+Shift+R)
2. Clear browser cache
3. Pastikan app sudah terinstall dengan benar:
   ```bash
   bench --site your-site-name list-apps
   ```

### Error saat instalasi

Pastikan Anda memiliki versi Frappe yang kompatibel:

```bash
bench version
```

## 📄 License

This project is licensed under the MIT License - see the [license.txt](license.txt) file for details.

## 👥 Support

Untuk pertanyaan, masalah, atau support:

- 📧 Email: admin@ibantu.com
- 🐛 Issues: [GitHub Issues](https://github.com/dodichakill/ibantu-erpnext-frappe-theme/issues)
- 📖 Documentation: [Wiki](https://github.com/dodichakill/ibantu-erpnext-frappe-theme/wiki)

## 🌟 Acknowledgments

- Terinspirasi dari [Tekton-Theme](https://github.com/vineyrawat/Tekton-Theme)
- Dibuat untuk komunitas Frappe/ERPNext
- Terima kasih kepada semua kontributor

---

**Made with 💛 by Ibantu Team**

Jika Anda merasa project ini berguna, berikan ⭐ di GitHub!
