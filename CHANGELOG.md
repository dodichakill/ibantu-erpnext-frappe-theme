# Changelog

All notable changes to Ibantu Theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.7] - 2024-12-18

### Fixed

- 🐛 **CRITICAL**: Fixed navbar icons not visible (chat & notifications icons had no contrast)
- ✅ Added high-contrast styling for all navbar SVG icons
- 🎨 Icons now show in bright yellow with hover effects
- ✅ Fixed notification badge styling with red background
- 🔧 Fixed theme not appearing in Switch Theme dialog
- ✅ Added ibantu-theme-init.js for proper theme registration

### Added

- New file: `ibantu-theme-init.js` - Registers themes on app load
- Navbar icon contrast: Yellow icons on dark navbar background
- Hover effects for navbar icons with glow (Canary theme)
- Dropdown menu styling in navbar

### Technical

- SVG icons now use `stroke: var(--yellow-300) !important`
- Themes auto-register via frappe.boot.desk_settings
- Both themes (Golden & Canary) now appear in Switch Theme dialog

## [1.0.6] - 2024-12-18

### Fixed

- 🐛 Fixed "App ibantu_theme not in apps.txt" error when using --skip-assets
- ✅ Updated CLIENT_INSTALL_FIX.md with TWO installation methods
- 📝 METHOD 1 (Recommended): Install normally, ignore build error, install to site
- 📝 METHOD 2: Use --skip-assets + manually add to apps.txt

### Solution

**METHOD 1 (RECOMMENDED):**

```bash
bench get-app <url>
# Build akan error - ABAIKAN saja!
bench --site your-site install-app ibantu_theme
```

Build error tidak masalah karena assets sudah pre-compiled. Pip install tetap berhasil.

## [1.0.5] - 2024-12-18

### Documentation

- 📝 Added CLIENT_INSTALL_FIX.md with proper installation instructions
- ✅ Use `--skip-assets` flag during bench get-app
- 🔧 Clear documentation that build process is not needed

### Solution

**Install command:**

```bash
bench get-app https://github.com/dodichakill/ibantu-erpnext-frappe-theme.git --skip-assets
```

This skips the automatic build step that was causing errors.

### Technical

- App uses pre-compiled CSS/JS files
- No esbuild process required
- Assets loaded directly via hooks.py
- `--skip-assets` flag prevents bench from running build command

## [1.0.4] - 2024-12-18

### Fixed

- 🐛 Fixed build.json format - changed from comment-only to empty object `{}`
- ✅ Frappe esbuild now correctly recognizes no files to build
- 🔧 build.json with only comment was still triggering file scan

### Technical

- build.json format: `{}` (empty object) is correct format for no-build apps
- Previous v1.0.3 had `{"$comment": "..."}` which wasn't recognized properly

## [1.0.3] - 2024-12-18

### Fixed

- 🐛 Fixed bench build error: "paths[0] must be of type string. Received undefined"
- ✅ Added `build.json` to skip build process (app uses pre-compiled CSS/JS)
- ✅ Removed invalid `main` entry from package.json
- 🔧 Updated package.json version to match app version

### Technical

- No build process required - all assets are pre-compiled
- Frappe esbuild now correctly skips this app
- Direct CSS/JS loading via hooks.py

## [1.0.2] - 2024-12-18

### Fixed

- 🐛 Fixed pip install error: "Flit cannot package module without docstring"
- ✅ Removed pyproject.toml (was causing conflicts with setup.py)
- ✅ Added proper docstring to `ibantu_theme/__init__.py`
- 🔧 Now uses standard Frappe setup.py approach (more compatible)

### Changed

- 📦 Package now installs correctly with standard pip
- 📝 Updated to use setuptools instead of flit_core

## [1.0.1] - 2024-12-18

### Fixed

- 🐛 Fixed build error (`TypeError: paths[0] must be of type string`)
- ⚡ Removed complex build process - now uses direct CSS/JS files
- 🔧 Updated hooks.py to use direct asset paths instead of bundle files
- 📦 Removed unnecessary bundle files (ibantu.bundle.js, ibantu.bundle.scss)
- ✨ Added CSS versions of themes in public/css folder
- 🚀 Installation now works without `bench build` command

### Changed

- 📝 Updated installation documentation
- 🔄 Simplified installation process (removed build step)
- 📋 Updated INSTALL.md with new simplified steps
- 📚 Added TROUBLESHOOTING.md guide

### Technical Changes

- Changed `app_include_css` from bundle to direct CSS files
- Changed `app_include_js` from bundle to direct JS file
- Removed build.json (no longer needed)
- Added pyproject.toml for better package definition
- CSS files are now directly referenced without build process

## [1.0.0] - 2024-12-18

### Added

- 🎨 Initial release of Ibantu Theme
- ✨ Ibantu Golden theme - sophisticated dark theme with golden yellow accents
- ✨ Ibantu Canary theme - vibrant dark theme with bright canary yellow
- 💫 Modern UI/UX with smooth animations and transitions
- 🎯 Enhanced theme switcher with detailed theme descriptions
- 🌙 Optimized dark mode for comfortable extended use
- 📱 Fully responsive design
- 🎨 Custom scrollbar styling with glow effects
- ⚡ Optimized performance with minimal overhead
- 📦 Complete Frappe app structure
- 📚 Comprehensive documentation (README, INSTALL, CONTRIBUTING)
- 🔧 Easy customization through SCSS variables
- 🎭 Smooth theme transitions
- 💅 Beautiful hover effects and animations
- 🌟 Card shadows and glow effects
- 🎪 Enhanced form controls and buttons
- 📊 Custom chart color schemes
- 🎨 Professional color palettes
- 🔍 High contrast for better readability
- ✅ Full compatibility with Frappe/ERPNext

### Features

- **Ibantu Golden Theme**

  - Rich golden yellow primary color (#E6B800)
  - Professional and elegant design
  - Perfect for business environments
  - Sophisticated color palette
  - Enhanced shadows and effects

- **Ibantu Canary Theme**
  - Bright canary yellow primary color (#FFD700)
  - Energetic and modern design
  - Vibrant and cheerful
  - Pulse animation effects
  - Enhanced glow effects

### Technical

- SCSS modular architecture
- CSS custom properties for easy theming
- Override mechanism for Frappe's theme switcher
- Clean and maintainable code structure
- No breaking changes to existing Frappe functionality

### Documentation

- Detailed README with features and usage
- Step-by-step installation guide
- Troubleshooting section
- Contributing guidelines
- Complete project structure documentation

## [Unreleased]

### Planned Features

- [ ] Light mode variants
- [ ] Additional color schemes
- [ ] Theme customization UI
- [ ] More animation options
- [ ] Accessibility improvements
- [ ] RTL support
- [ ] More chart themes
- [ ] Custom dashboard widgets
- [ ] Theme preview before applying
- [ ] Export/import theme settings

---

## Version History

- **1.0.0** (2024-12-18) - Initial Release

[1.0.0]: https://github.com/dodichakill/ibantu-erpnext-frappe-theme/releases/tag/v1.0.0
