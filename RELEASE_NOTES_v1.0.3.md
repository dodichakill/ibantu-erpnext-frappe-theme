# Release Notes - Version 1.0.3

**Release Date:** December 18, 2024

## 🎯 Critical Build Fix

This release fixes the **bench build error** that occurred during app installation on client VPS.

## 🐛 Issues Fixed

### Build Error During Installation

**Problem:**
```
TypeError [ERR_INVALID_ARG_TYPE]: The "paths[0]" argument must be of type string. Received undefined
    at get_all_files_to_build (/home/demoierpx/frappe-bench/apps/frappe/esbuild/esbuild.js:192:9)
```

**Root Cause:**
- `bench build --app ibantu_theme` was automatically triggered during installation
- Frappe's esbuild tried to find files to build but couldn't locate them
- `package.json` had invalid `main` entry pointing to non-existent bundle file

**Solution:**
1. ✅ Added `ibantu_theme/build.json` - tells Frappe to skip build process
2. ✅ Removed invalid `main` entry from `package.json`
3. ✅ Updated versions to 1.0.3

## 📦 What Changed

### New Files
- `ibantu_theme/build.json` - Build configuration (empty = skip build)

### Modified Files
- `ibantu_theme/__init__.py` - Version bumped to 1.0.3
- `package.json` - Removed `main` entry, updated version
- `CHANGELOG.md` - Added v1.0.3 changelog

## 🎨 Theme Features (Unchanged)

Both themes remain fully functional:
- **Ibantu Golden** - Professional golden yellow (#E6B800)
- **Ibantu Canary** - Vibrant canary yellow (#FFD700)

## 🔧 Technical Details

### Why No Build Required?

This app uses **pre-compiled CSS/JS files**:
- ✅ CSS files are ready-to-use (no SCSS compilation needed)
- ✅ JS is vanilla JavaScript (no bundling needed)
- ✅ Assets loaded directly via `hooks.py`

### Build Process Flow
```
Before v1.0.3:
bench get-app → pip install ✅ → bench build ❌ (ERROR)

After v1.0.3:
bench get-app → pip install ✅ → bench build ⏭️ (SKIPPED) → SUCCESS ✅
```

## 📋 Client Environment (Tested)

- **Python:** 3.12.3
- **Bench:** 5.27.0
- **Node:** v20.19.6
- **OS:** VPS Linux

## 🚀 Installation Instructions

### Clean Installation
```bash
# Remove old version if exists
cd ~/frappe-bench
bench remove-app ibantu_theme

# Install v1.0.3
bench get-app https://github.com/dodichakill/ibantu-erpnext-frappe-theme.git

# Install to site
bench --site your-site-name install-app ibantu_theme

# Restart
bench restart
```

### Update from v1.0.2
```bash
cd ~/frappe-bench/apps/ibantu_theme
git pull
bench restart
```

## ✅ Expected Results

After successful installation:

1. **No build errors** during `bench get-app`
2. **Themes available** in Switch Theme menu:
   - Light Mode → Ibantu Golden
   - Light Mode → Ibantu Canary
   - Dark Mode → Works with both themes
3. **All features working:**
   - ✅ Navigation bar colors
   - ✅ Button hover effects
   - ✅ Card shadows
   - ✅ Dark mode integration

## 🧪 Testing Checklist

- [x] Clean installation on VPS (Python 3.12.3, Bench 5.27.0)
- [x] No build errors
- [x] Themes appear in menu
- [x] Visual elements render correctly
- [x] Dark mode toggle works
- [x] No console errors

## 📊 Version History

| Version | Release Date | Status | Key Changes |
|---------|-------------|--------|-------------|
| 1.0.0   | Dec 18, 2024 | ❌ Deprecated | Initial release with bundle approach |
| 1.0.1   | Dec 18, 2024 | ❌ Deprecated | Fixed build error, removed bundles |
| 1.0.2   | Dec 18, 2024 | ❌ Deprecated | Fixed pip docstring error |
| **1.0.3** | **Dec 18, 2024** | ✅ **Current** | **Fixed bench build error** |

## 🔍 Verification

Test installation success:

```bash
# 1. Check app is installed
bench list-apps | grep ibantu

# 2. Check Python module
cd ~/frappe-bench/apps/ibantu_theme
python3 -c "from ibantu_theme import __version__; print(__version__)"
# Expected output: 1.0.3

# 3. Check themes in Frappe
# Login to your site → Settings → Switch Theme
# You should see: Ibantu Golden and Ibantu Canary
```

## 🆘 Troubleshooting

If still getting errors after updating to v1.0.3:

### Clear Cache
```bash
bench clear-cache
bench restart
```

### Rebuild (Force)
```bash
bench build --force
```

### Reinstall
```bash
bench remove-app ibantu_theme
bench get-app https://github.com/dodichakill/ibantu-erpnext-frappe-theme.git
bench --site your-site install-app ibantu_theme
bench restart
```

## 📝 Notes

- This is a **hotfix release** addressing production installation issues
- No theme functionality changes
- All previous features remain intact
- Recommended for all users experiencing build errors

## 🙏 Credits

Thanks to the client for providing detailed error logs from their VPS environment, which helped identify and resolve this issue quickly.

---

**Need Help?** Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) or open an issue on GitHub.
