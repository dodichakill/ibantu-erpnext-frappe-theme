# Troubleshooting Guide - Ibantu Theme

## Common Installation Issues

### 1. Pip Install Error (Flit/Docstring Error) - FIXED in v1.0.2

**Problem:**

```
flit_core.common.NoDocstringError: Flit cannot package module without docstring
error: metadata-generation-failed
```

**Solution:**
This error is FIXED in version 1.0.2+. Update to the latest version:

```bash
cd apps/ibantu-erpnext-frappe-theme
git pull
cd ../..
bench --site your-site-name install-app ibantu_theme
```

If you're still on an old version, the issue was:

- ❌ Old: Had `pyproject.toml` using flit_core (conflicted with setup.py)
- ✅ New: Uses standard Frappe `setup.py` with setuptools

### 2. Build Error (TypeError: paths[0] must be of type string) - FIXED in v1.0.1

**Problem:**

```
TypeError [ERR_INVALID_ARG_TYPE]: The "paths[0]" argument must be of type string. Received undefined
```

**Solution:**
This error should NOT occur with the latest version of the app. We've removed the build dependency. If you still see this:

1. Make sure you have the latest version:

   ```bash
   cd apps/ibantu-erpnext-frappe-theme
   git pull
   ```

2. Reinstall the app:

   ```bash
   bench --site your-site-name uninstall-app ibantu_theme
   bench --site your-site-name install-app ibantu_theme
   ```

3. Clear cache:
   ```bash
   bench --site your-site-name clear-cache
   bench restart
   ```

### 2. Theme Not Appearing in Theme Switcher

**Solution:**

```bash
# Clear cache
bench --site your-site-name clear-cache

# Restart bench
bench restart

# Hard refresh browser
Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
```

### 3. Colors Not Applying

**Causes:**

- Browser cache
- User preference not saved
- CSS files not loaded

**Solution:**

1. Open browser Developer Console (F12)
2. Check if you see: `🎨 Ibantu Theme Loaded - Modern Yellow Themes Available!`
3. Check Network tab for CSS files:
   - `ibantu-golden.css`
   - `ibantu-canary.css`
4. If files are not loading, clear cache:
   ```bash
   bench --site your-site-name clear-cache
   bench restart
   ```
5. Hard refresh browser

### 4. App Installation Failed

**Check if app folder exists:**

```bash
ls -la apps/
```

You should see `ibantu-erpnext-frappe-theme` folder.

**If not present:**

```bash
cd /path/to/frappe-bench
bench get-app https://github.com/dodichakill/ibantu-erpnext-frappe-theme.git
```

### 5. Permission Denied Error

**Solution:**

```bash
# Fix permissions
sudo chown -R $USER:$USER apps/ibantu-erpnext-frappe-theme

# Or if using specific user
sudo chown -R frappe:frappe apps/ibantu-erpnext-frappe-theme
```

### 6. Dependency Conflicts

**Note:** The warnings about `beautifulsoup4` and `boto3` are usually safe to ignore as they don't affect theme functionality.

**If you want to fix them:**

```bash
# For beautifulsoup4
pip install beautifulsoup4~=4.13.4

# For boto3
pip install boto3~=1.28.10
```

## Verification Steps

### Check if App is Installed

```bash
bench --site your-site-name list-apps
```

You should see `ibantu_theme` in the list.

### Check Console Logs

1. Login to your site
2. Open Developer Console (F12)
3. Look for: `🎨 Ibantu Theme Loaded - Modern Yellow Themes Available!`

### Check Network Requests

1. Open Developer Tools (F12)
2. Go to Network tab
3. Refresh page
4. Filter by CSS
5. Verify these files are loaded:
   - `ibantu-golden.css`
   - `ibantu-canary.css`

### Check Theme Options

1. Click profile icon
2. Select "Switch Theme"
3. You should see:
   - Frappe Light
   - Timeless Night
   - Automatic
   - **Ibantu Golden** ← Should be visible
   - **Ibantu Canary** ← Should be visible

## Still Having Issues?

### Collect Debug Information

```bash
# Check Frappe version
bench version

# Check site config
cat sites/your-site-name/site_config.json

# Check error logs
tail -f logs/web.error.log

# Check installed apps
bench --site your-site-name list-apps
```

### Report an Issue

If the problem persists, create a GitHub issue with:

1. **Frappe/ERPNext Version:**

   ```bash
   bench version
   ```

2. **Error Message:** (full traceback)

3. **Steps to Reproduce:**

   - What you did
   - What you expected
   - What actually happened

4. **Environment:**

   - OS: (Ubuntu, CentOS, etc.)
   - Python version
   - Node version

5. **Browser Console Output:**
   - Any errors in console (F12)

## Quick Fixes

### Complete Reset

If nothing else works:

```bash
# 1. Uninstall app
bench --site your-site-name uninstall-app ibantu_theme

# 2. Remove app folder
rm -rf apps/ibantu-erpnext-frappe-theme

# 3. Reinstall from scratch
bench get-app https://github.com/dodichakill/ibantu-erpnext-frappe-theme.git
bench --site your-site-name install-app ibantu_theme

# 4. Clear everything
bench --site your-site-name clear-cache
bench clear-cache

# 5. Restart
bench restart
```

### Browser Issues

```bash
# Clear browser data:
# 1. Open browser settings
# 2. Clear browsing data
# 3. Select:
#    - Cached images and files
#    - Cookies and site data
# 4. For "All time"
# 5. Clear data
# 6. Restart browser
```

## Additional Help

- 📖 Documentation: [README.md](README.md)
- 🚀 Installation Guide: [INSTALL.md](INSTALL.md)
- 💬 GitHub Issues: https://github.com/dodichakill/ibantu-erpnext-frappe-theme/issues

---

**Last Updated:** 2024-12-18
**Version:** 1.0.0
