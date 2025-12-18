# Contributing to Ibantu Theme

First off, thank you for considering contributing to Ibantu Theme! ❤️

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Description**: Clear description of the issue
- **Steps to Reproduce**: Step-by-step instructions
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**:
  - Frappe version
  - ERPNext version
  - Browser and version
  - Operating System

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title**: Brief description of the enhancement
- **Detailed description**: Explain why this enhancement would be useful
- **Examples**: If possible, provide examples or mockups

### Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test your changes thoroughly
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/yourusername/ibantu-theme.git

# Navigate to frappe-bench
cd /path/to/frappe-bench

# Get the app
bench get-app ibantu_theme /path/to/ibantu-theme

# Install to your site
bench --site your-site-name install-app ibantu_theme

# Start development
bench start
```

## Code Style

- Use meaningful variable names
- Comment your code when necessary
- Follow existing code structure
- Keep SCSS organized and modular
- Use CSS custom properties (variables) for colors

## Adding a New Theme

1. Create a new SCSS file in `ibantu_theme/public/scss/`
2. Define color variables following the existing pattern
3. Import the new file in `ibantu.bundle.scss`
4. Add theme option in `theme-switcher.js`
5. Update the whitelist in `overrides/user/user.py`
6. Test thoroughly
7. Update documentation

## Testing

Before submitting a PR, please test:

1. Theme switching works correctly
2. All UI elements display properly
3. No console errors
4. Works in different browsers (Chrome, Firefox, Safari)
5. Responsive design works on mobile

## Documentation

- Update README.md if you change functionality
- Add comments for complex code
- Update INSTALL.md if installation process changes

## Questions?

Feel free to create an issue with the "question" label.

Thank you for contributing! 🎨✨
