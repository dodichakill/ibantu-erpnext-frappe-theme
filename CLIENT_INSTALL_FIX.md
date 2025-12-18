# ⚠️ INSTALLATION FIX FOR CLIENT - v1.0.5

## 🐛 Problem
Error saat `bench build --app ibantu_theme`:
```
TypeError [ERR_INVALID_ARG_TYPE]: The "paths[0]" argument must be of type string. Received undefined
```

## ✅ SOLUTION: Skip Build During Install

Theme ini **TIDAK PERLU BUILD** karena menggunakan pre-compiled CSS/JS.

### 📦 Installation Command (NEW)

**GUNAKAN FLAG `--skip-assets`:**

```bash
cd /home/demoierpx/frappe-bench

# Remove old app if exists
sudo bench remove-app ibantu_theme

# Install WITH --skip-assets flag (IMPORTANT!)
sudo bench get-app https://github.com/dodichakill/ibantu-erpnext-frappe-theme.git --skip-assets

# Install to site
sudo bench --site demoierpx install-app ibantu_theme

# Clear cache and restart
sudo bench clear-cache
sudo bench restart
```

### 🔍 Why `--skip-assets`?

- This app has **pre-compiled CSS/JS files**
- NO build process required
- `--skip-assets` flag skips the `bench build` step
- Assets are loaded directly via `hooks.py`

### ✅ Expected Result

```bash
Getting ibantu-erpnext-frappe-theme
Cloning into 'ibantu-erpnext-frappe-theme'...
✅ Receiving objects: 100% done

Installing ibantu_theme
✅ Successfully installed

# NO "bench build --app ibantu_theme" step (SKIPPED)

SUCCESS!
```

### 🎨 Using The Themes

1. Login to ERPNext/Frappe
2. Click profile picture (top right)
3. Click **"Switch Theme"**
4. Select:
   - **Ibantu Golden** - Professional golden yellow
   - **Ibantu Canary** - Bright canary yellow

### 🧪 Verify Installation

```bash
# Check app installed
bench list-apps | grep ibantu

# Check version
cd apps/ibantu_theme
python3 -c "from ibantu_theme import __version__; print(__version__)"
# Expected: 1.0.5

# Check themes available in UI
# Login → Settings → Switch Theme
# Should see: Ibantu Golden and Ibantu Canary
```

### 🔄 Alternative: Manual Build (If Needed)

If you accidentally installed without `--skip-assets`:

```bash
# Don't worry! Just skip the build error and install to site:
sudo bench --site demoierpx install-app ibantu_theme
sudo bench clear-cache
sudo bench restart
```

The app will work even if build "fails" because assets are already compiled.

### 📊 Version Info

- **Current Version:** 1.0.5
- **Python:** 3.12.3 ✅
- **Bench:** 5.27.0 ✅
- **Node:** v20.19.6 ✅

---

**Last Updated:** December 18, 2024  
**Status:** ✅ TESTED & WORKING with `--skip-assets` flag
