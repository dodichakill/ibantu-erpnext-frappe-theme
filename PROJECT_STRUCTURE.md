# 📁 Ibantu Theme - Project Structure

```
ibantu-theme/
│
├── 📄 Core Configuration Files
│   ├── setup.py                      # Python package setup
│   ├── requirements.txt              # Python dependencies
│   ├── package.json                  # Node.js package info
│   ├── MANIFEST.in                   # Package manifest
│   └── .gitignore                    # Git ignore rules
│
├── 📚 Documentation
│   ├── README.md                     # Main documentation
│   ├── INSTALL.md                    # Installation guide
│   ├── QUICKSTART.md                 # Quick start guide
│   ├── TECHNICAL.md                  # Technical documentation
│   ├── VISUAL_GUIDE.md               # Visual guide & examples
│   ├── CONTRIBUTING.md               # Contribution guidelines
│   ├── CHANGELOG.md                  # Version history
│   └── license.txt                   # MIT License
│
└── 📦 ibantu_theme/                  # Main app directory
    │
    ├── 🔧 Core App Files
    │   ├── __init__.py               # Version: 1.0.0
    │   ├── hooks.py                  # Frappe hooks config
    │   └── modules.txt               # Module definition
    │
    ├── ⚙️ Configuration
    │   └── config/
    │       ├── desktop.py            # Desktop module
    │       └── docs.py               # Docs configuration
    │
    ├── 🔄 Overrides
    │   └── overrides/
    │       └── user/
    │           └── user.py           # Theme switcher override
    │
    └── 🎨 Public Assets
        │
        ├── 📜 JavaScript
        │   ├── theme-switcher.js     # Theme switcher extension
        │   └── ibantu.bundle.js      # JS bundle entry point
        │
        └── 🎨 Stylesheets
            ├── ibantu-golden.scss    # Golden theme (478 lines)
            ├── ibantu-canary.scss    # Canary theme (502 lines)
            └── ibantu.bundle.scss    # SCSS bundle entry point
```

## 📊 Statistics

- **Total Files:** 21 files
- **Documentation:** 8 markdown files
- **Python Files:** 5 files
- **JavaScript Files:** 2 files
- **SCSS Files:** 3 files
- **Total SCSS Lines:** ~1000 lines
- **Themes Available:** 2 themes

## 🎨 Themes

### 1. Ibantu Golden

- **File:** `ibantu-golden.scss`
- **Primary Color:** `#E6B800` (Golden Yellow)
- **Style:** Professional & Elegant
- **Lines of Code:** ~478 lines

### 2. Ibantu Canary

- **File:** `ibantu-canary.scss`
- **Primary Color:** `#FFD700` (Canary Yellow)
- **Style:** Vibrant & Modern
- **Lines of Code:** ~502 lines

## 🔑 Key Files

### Python Files

1. **setup.py**

   - Package installation configuration
   - Defines app metadata
   - Manages dependencies

2. **ibantu_theme/**init**.py**

   - Version declaration: `1.0.0`
   - Package initialization

3. **ibantu_theme/hooks.py**

   - Frappe hook configuration
   - JS/CSS injection: `ibantu.bundle.js`, `ibantu.bundle.css`
   - Method override: `switch_theme`

4. **ibantu_theme/overrides/user/user.py**

   - Extends theme switcher
   - Adds custom themes to whitelist
   - Handles theme switching

5. **ibantu_theme/config/desktop.py** & **docs.py**
   - Module configuration
   - Documentation settings

### JavaScript Files

1. **theme-switcher.js**

   - Extends `frappe.ui.ThemeSwitcher`
   - Adds custom theme options
   - Provides theme descriptions

2. **ibantu.bundle.js**
   - Bundle entry point
   - Imports theme-switcher
   - Console logging

### SCSS Files

1. **ibantu-golden.scss**

   - Golden yellow color palette
   - Professional styling
   - Modern UI components

2. **ibantu-canary.scss**

   - Canary yellow color palette
   - Vibrant styling
   - Enhanced animations

3. **ibantu.bundle.scss**
   - SCSS entry point
   - Imports both themes

## 📦 Dependencies

### Python

```
frappe
```

### Node.js (Dev)

```
sass ^1.32.0
```

## 🚀 Build Outputs

When built, generates:

- `ibantu.bundle.js` - Compiled JavaScript
- `ibantu.bundle.css` - Compiled CSS

## 🎯 Entry Points

### For Frappe

- **JS Entry:** `ibantu_theme/public/js/ibantu.bundle.js`
- **CSS Entry:** `ibantu_theme/public/scss/ibantu.bundle.scss`

### For Users

- **Installation:** `INSTALL.md`
- **Quick Start:** `QUICKSTART.md`
- **Documentation:** `README.md`

## 🔄 Workflow

```
User Action → Theme Switcher → Override Method → Update User Pref → Apply CSS
     ↑                                                                    ↓
     └──────────────────── Theme Applied ←──────────────────────────────┘
```

## 🎨 Color System

### Golden Theme

```
Dark Background:  #332900 → #998100
Yellow Spectrum:  #874D00 → #FFF3C4
```

### Canary Theme

```
Dark Background:  #332B00 → #998100
Yellow Spectrum:  #998500 → #FFFCEB
```

## 💡 Features Implemented

✅ **Core Features**

- [x] 2 Custom themes
- [x] Theme switcher integration
- [x] Modern animations
- [x] Responsive design
- [x] Dark mode optimized

✅ **UI Components**

- [x] Custom buttons
- [x] Card styling
- [x] Sidebar design
- [x] Form controls
- [x] Navbar styling
- [x] Scrollbar theming

✅ **Effects**

- [x] Hover animations
- [x] Shadow effects
- [x] Glow effects
- [x] Gradient backgrounds
- [x] Smooth transitions
- [x] Pulse animations

✅ **Documentation**

- [x] README
- [x] Installation guide
- [x] Technical docs
- [x] Visual guide
- [x] Quick start
- [x] Contributing guide
- [x] Changelog

## 🛠️ Maintenance

### Regular Updates

- Version bumps in `__init__.py`
- Changelog updates in `CHANGELOG.md`
- Documentation updates as needed

### Testing

- Manual theme switching
- UI component verification
- Browser compatibility
- Performance testing

## 📱 Compatibility

- **Frappe:** v13+
- **ERPNext:** All versions
- **Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile:** Fully responsive

## 📞 Support

- **Email:** admin@ibantu.com
- **Issues:** GitHub Issues
- **Docs:** Project Wiki

---

**Project Status:** ✅ Complete & Ready for Production

**Version:** 1.0.0

**License:** MIT

**Created:** 2024-12-18

**Last Updated:** 2024-12-18

---

_This project structure provides a complete, production-ready Frappe theme app with modern yellow color schemes._ 🎨✨
