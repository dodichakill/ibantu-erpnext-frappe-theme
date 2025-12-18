# Panduan Instalasi Ibantu Theme

## Prerequisites

Sebelum menginstall Ibantu Theme, pastikan Anda telah memiliki:

1. **Frappe Framework** yang sudah terinstall
2. **ERPNext** (opsional, tapi direkomendasikan)
3. **Git** terinstall di sistem Anda
4. Access ke terminal/command line
5. Permissions yang cukup untuk menjalankan bench commands

## Langkah-langkah Instalasi Lengkap

### 1. Navigasi ke Frappe Bench Directory

```bash
cd /path/to/frappe-bench
```

Contoh:

```bash
cd ~/frappe-bench
# atau
cd /home/username/frappe-bench
```

### 2. Get App dari Repository

**Opsi A: Dari GitHub (jika sudah dipublish)**

```bash
bench get-app ibantu_theme https://github.com/dodichakill/ibantu-erpnext-frappe-theme.git
```

**Opsi B: Dari Local Directory**

```bash
bench get-app ibantu_theme /Users/dodi/Development/works/ibantu/frappe-theme
```

### 3. Install App ke Site

```bash
bench --site your-site-name install-app ibantu_theme
```

Ganti `your-site-name` dengan nama site Anda. Contoh:

```bash
bench --site site1.local install-app ibantu_theme
```

### 4. Build Assets

```bash
bench build --app ibantu_theme
```

### 5. Clear Cache

```bash
bench --site your-site-name clear-cache
```

### 6. Restart Bench

**Untuk Production:**

```bash
bench restart
```

**Untuk Development:**

```bash
# Jika sedang running, stop dulu
Ctrl+C

# Kemudian start lagi
bench start
```

### 7. Aktifkan Tema

1. Login ke ERPNext/Frappe instance Anda
2. Klik icon **profile** di pojok kanan atas
3. Pilih **"Switch Theme"** atau **"Ganti Tema"**
4. Pilih salah satu tema:
   - **Ibantu Golden** - Golden yellow theme
   - **Ibantu Canary** - Canary yellow theme
5. Tema akan langsung aktif!

## Verifikasi Instalasi

### Check if app is installed

```bash
bench --site your-site-name list-apps
```

Anda harus melihat `ibantu_theme` dalam daftar.

### Check Console Browser

1. Buka browser dan login ke site Anda
2. Buka Developer Console (F12)
3. Anda harus melihat pesan:
   ```
   🎨 Ibantu Theme Loaded - Modern Yellow Themes Available!
   ```

## Troubleshooting

### Problem: Tema tidak muncul di daftar

**Solusi:**

```bash
bench --site your-site-name clear-cache
bench build --app ibantu_theme
bench restart
```

### Problem: Error "App ibantu_theme not found"

**Solusi:**

1. Pastikan app sudah di-get dengan benar:

   ```bash
   ls apps/
   ```

   Anda harus melihat folder `ibantu_theme`

2. Jika belum ada, ulangi langkah get-app

### Problem: Warna tidak berubah

**Solusi:**

1. Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) atau `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Logout dan login kembali

### Problem: Build error

**Solusi:**

```bash
# Install node dependencies jika diperlukan
cd apps/ibantu_theme
yarn install  # atau npm install

# Kembali ke bench directory
cd ../..

# Build lagi
bench build --app ibantu_theme
```

## Uninstall (jika diperlukan)

Jika Anda ingin menghapus tema:

```bash
# Uninstall dari site
bench --site your-site-name uninstall-app ibantu_theme

# Hapus app dari bench (opsional)
bench remove-app ibantu_theme
```

## Update Theme

Jika ada update baru:

```bash
cd /path/to/frappe-bench
bench get-app ibantu_theme --branch main --resolve-deps
bench --site your-site-name migrate
bench build --app ibantu_theme
bench restart
```

## Multiple Sites

Jika Anda memiliki multiple sites:

```bash
# Install ke semua sites
bench --site all install-app ibantu_theme

# Atau install ke specific sites
bench --site site1.local install-app ibantu_theme
bench --site site2.local install-app ibantu_theme
```

## Production Setup

Untuk production environment:

```bash
# Setelah install
bench setup supervisor
bench setup nginx

# Restart services
sudo supervisorctl restart all
sudo service nginx reload
```

## Tips

1. **Backup** site Anda sebelum install app baru:

   ```bash
   bench --site your-site-name backup
   ```

2. **Test** di development environment dulu sebelum production

3. **Monitor logs** jika ada masalah:
   ```bash
   bench --site your-site-name console
   # atau
   tail -f logs/web.error.log
   ```

## Support

Jika Anda mengalami masalah:

1. Check error logs:

   ```bash
   bench --site your-site-name logs
   ```

2. Buat issue di GitHub dengan detail:
   - Versi Frappe/ERPNext
   - Error message lengkap
   - Langkah-langkah yang sudah dicoba

---

Selamat menggunakan Ibantu Theme! 🎨✨
