# Changelog

All notable changes to Ibantu Theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
