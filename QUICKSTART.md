# Ibantu Theme - Quick Start Guide

## 🚀 Quick Installation (TL;DR)

```bash
cd /path/to/frappe-bench
bench get-app ibantu_theme /Users/dodi/Development/works/ibantu/frappe-theme
bench --site your-site-name install-app ibantu_theme
bench build --app ibantu_theme
bench restart
```

Then: Profile → Switch Theme → Choose **Ibantu Golden** or **Ibantu Canary**

## 🎨 Available Themes

### 1. Ibantu Golden

**Professional & Elegant**

- Golden yellow (#E6B800)
- Perfect for business
- Sophisticated design

### 2. Ibantu Canary

**Vibrant & Modern**

- Canary yellow (#FFD700)
- Energetic look
- Bright and cheerful

## 🎯 Key Features

✅ **Dark Mode Optimized** - Easy on the eyes  
✅ **Modern Animations** - Smooth transitions  
✅ **Professional Design** - Business-ready  
✅ **Easy to Install** - 5 minute setup  
✅ **Fully Compatible** - Works with Frappe/ERPNext  
✅ **Customizable** - Easy to modify colors

## 📋 Requirements

- Frappe Framework v13+
- ERPNext (optional)
- Modern browser

## 🔧 Basic Commands

```bash
# Clear cache
bench --site your-site-name clear-cache

# Rebuild
bench build --app ibantu_theme

# Restart
bench restart
```

## 🆘 Common Issues

**Theme not showing?**

```bash
bench --site your-site-name clear-cache
bench restart
```

**Colors not changing?**

- Hard refresh: `Ctrl+Shift+R`
- Clear browser cache

## 📚 More Info

- Full docs: [README.md](README.md)
- Installation: [INSTALL.md](INSTALL.md)
- Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)

## 💡 Tips

- Use `bench watch` for live development
- Backup before installation
- Test in dev environment first

---

**Need help?** Open an issue on GitHub 🐛
