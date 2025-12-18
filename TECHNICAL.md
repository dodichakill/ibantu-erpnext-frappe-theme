# Ibantu Theme - Technical Documentation

## Architecture Overview

Ibantu Theme is built as a Frappe custom app that extends the default theme system.

### Component Structure

```
ibantu_theme/
├── Core App Files
│   ├── __init__.py          # Version info
│   ├── hooks.py             # Frappe hooks configuration
│   └── modules.txt          # Module definition
│
├── Configuration
│   └── config/
│       ├── desktop.py       # Desktop module config
│       └── docs.py          # Documentation config
│
├── Overrides
│   └── overrides/
│       └── user/
│           └── user.py      # Theme switcher override
│
└── Public Assets
    ├── js/
    │   ├── theme-switcher.js    # Theme switcher extension
    │   └── ibantu.bundle.js     # Bundle entry point
    └── scss/
        ├── ibantu-golden.scss   # Golden theme styles
        ├── ibantu-canary.scss   # Canary theme styles
        └── ibantu.bundle.scss   # SCSS entry point
```

## How It Works

### 1. Hook System

The app uses Frappe's hook system (`hooks.py`) to inject:

- JavaScript files via `app_include_js`
- CSS files via `app_include_css`
- Method overrides via `override_whitelisted_methods`

### 2. Theme Switcher Override

```python
# overrides/user/user.py
@frappe.whitelist()
def switch_theme(theme):
    # Extends default themes with custom ones
    if theme in ["Dark", "Light", "Automatic", "Ibantu-golden", "Ibantu-canary"]:
        frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)
```

### 3. JavaScript Extension

```javascript
// theme-switcher.js
frappe.ui.ThemeSwitcher = class IbantuThemeSwitcher extends (
  frappe.ui.ThemeSwitcher
) {
  fetch_themes() {
    // Adds custom themes to the switcher
    return new Promise((resolve) => {
      this.themes = [
        // Default themes...
        {
          name: "ibantu-golden",
          label: "Ibantu Golden",
          info: "Modern dark theme with golden yellow",
        },
        // ...
      ];
      resolve(this.themes);
    });
  }
};
```

### 4. SCSS Architecture

Each theme file follows this structure:

```scss
[data-theme="theme-name"] {
  // Color Variables
  --gray-50 to --gray-900     // Base grays
    --yellow-50 to --yellow-900 // Primary yellows
    --blue-500 to --blue-900    // Blues
    // ... other colors
    
    // Text Colors
    --text-color
    --text-muted
    --heading-color
    
    // Layout Colors
    --bg-color
    --fg-color
    --card-bg
    
    // Component Overrides
    .component {
    // Custom styles
  }
}
```

## Color System

### Variable Naming Convention

```scss
--{category}-{shade}
```

Categories:

- `gray` - Base neutrals
- `yellow` - Primary brand color
- `blue`, `green`, `red`, etc. - Semantic colors

Shades:

- `50` - Lightest
- `900` - Darkest

### Usage Examples

```scss
// Define
--primary-color: var(--yellow-600);

// Use in components
.button-primary {
  background: var(--primary-color);
}
```

## Custom Properties

### Modern Enhancements

```scss
--primary-gradient: linear-gradient(...);
--card-shadow: 0 4px 20px rgba(...);
--hover-shadow: 0 8px 30px rgba(...);
--glow-effect: 0 0 20px rgba(...);
```

### Animation System

```scss
// Transitions
transition: all 0.3s ease;

// Hover effects
transform: translateY(-2px);

// Glow animations
@keyframes canary-pulse {
  0%,
  100% {
    box-shadow: ...;
  }
  50% {
    box-shadow: ...;
  }
}
```

## Build Process

### 1. Development

```bash
# Watch for changes
bench watch

# Manual build
bench build --app ibantu_theme
```

### 2. Production

```bash
# Build and minify
bench build --app ibantu_theme --production

# Setup supervisor & nginx
bench setup supervisor
bench setup nginx
sudo supervisorctl restart all
```

## Performance Optimization

### CSS

- Uses CSS custom properties (fast runtime changes)
- Minimal specificity (prevents cascade issues)
- Modular SCSS (efficient bundling)

### JavaScript

- Extends existing classes (no duplication)
- Minimal runtime code
- Event-based theme switching

### Best Practices

1. **Use CSS Variables** for dynamic values
2. **Avoid !important** unless necessary
3. **Minimize selectors** for better performance
4. **Group related styles** for maintainability

## Extending the Theme

### Adding New Colors

```scss
// In your theme file
[data-theme="your-theme"] {
  --new-color-500: #ff6b6b;

  // Use it
  .custom-element {
    color: var(--new-color-500);
  }
}
```

### Creating Custom Components

```scss
// Add to theme file
.custom-widget {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: var(--hover-shadow);
    transform: translateY(-4px);
  }
}
```

### Adding Animations

```scss
@keyframes your-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animated-element {
  animation: your-animation 0.5s ease;
}
```

## Browser Compatibility

### Supported Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### CSS Features Used

- CSS Custom Properties (CSS Variables)
- CSS Grid & Flexbox
- CSS Transforms & Transitions
- CSS Animations
- CSS Gradients

## Security Considerations

1. **Whitelisted Methods**: Only theme switching is exposed
2. **User Permissions**: Theme changes only affect current user
3. **No External Requests**: All assets are bundled
4. **XSS Protection**: No user input in CSS/JS

## Testing

### Manual Testing Checklist

- [ ] Theme appears in switcher
- [ ] Colors apply correctly
- [ ] Animations work smoothly
- [ ] No console errors
- [ ] Works on mobile
- [ ] Works in different browsers
- [ ] Performance is good
- [ ] No style conflicts

### Automated Testing

```bash
# Run Frappe tests
bench --site your-site-name run-tests --app ibantu_theme
```

## Debugging

### Common Issues

**Theme not loading:**

```bash
# Check browser console
# Look for: "🎨 Ibantu Theme Loaded"

# Check network tab
# Verify ibantu.bundle.js and .css are loaded
```

**Styles not applying:**

```javascript
// Check in browser console
getComputedStyle(document.documentElement).getPropertyValue("--yellow-600");
```

**Build errors:**

```bash
# Clean and rebuild
bench clear-cache
rm -rf sites/assets/*
bench build --app ibantu_theme
```

## API Reference

### Theme Switcher Methods

```javascript
// Get available themes
frappe.ui.theme_switcher.fetch_themes();

// Switch theme
frappe.call({
  method: "ibantu_theme.overrides.user.user.switch_theme",
  args: { theme: "ibantu-golden" },
});
```

### CSS Custom Properties

All available CSS variables can be found in:

- `ibantu-golden.scss` - Golden theme variables
- `ibantu-canary.scss` - Canary theme variables

## Contributing to Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for:

- Code style guidelines
- Pull request process
- Development setup
- Testing requirements

---

For more information, see:

- [README.md](README.md) - General overview
- [INSTALL.md](INSTALL.md) - Installation guide
- [CHANGELOG.md](CHANGELOG.md) - Version history
