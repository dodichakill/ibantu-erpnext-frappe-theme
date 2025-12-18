#!/bin/bash

# 🎨 Ibantu Theme - Quick Installation Script
# This script automates the installation process

set -e  # Exit on error

echo "🎨 =========================================="
echo "   Ibantu Theme Installation Script"
echo "   Version 1.0.0"
echo "=========================================="
echo ""

# Check if we're in frappe-bench
if [ ! -f "sites/common_site_config.json" ]; then
    echo "❌ Error: Not in frappe-bench directory!"
    echo "Please run this script from your frappe-bench directory."
    exit 1
fi

# Get site name
if [ -z "$1" ]; then
    echo "📝 Available sites:"
    ls -d sites/*/ | grep -v "sites/assets" | cut -d'/' -f2
    echo ""
    read -p "Enter site name: " SITE_NAME
else
    SITE_NAME=$1
fi

# Verify site exists
if [ ! -d "sites/$SITE_NAME" ]; then
    echo "❌ Error: Site '$SITE_NAME' not found!"
    exit 1
fi

echo ""
echo "✅ Installing Ibantu Theme to site: $SITE_NAME"
echo ""

# Get app path
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Step 1: Get app
echo "📦 Step 1/5: Getting app..."
if [ -d "apps/ibantu_theme" ]; then
    echo "   ⚠️  App already exists, skipping..."
else
    bench get-app ibantu_theme "$SCRIPT_DIR"
    echo "   ✅ App downloaded"
fi

# Step 2: Install app to site
echo ""
echo "💾 Step 2/5: Installing app to site..."
bench --site "$SITE_NAME" install-app ibantu_theme
echo "   ✅ App installed"

# Step 3: Build assets
echo ""
echo "🔨 Step 3/5: Building assets..."
bench build --app ibantu_theme
echo "   ✅ Assets built"

# Step 4: Clear cache
echo ""
echo "🗑️  Step 4/5: Clearing cache..."
bench --site "$SITE_NAME" clear-cache
echo "   ✅ Cache cleared"

# Step 5: Restart
echo ""
echo "🔄 Step 5/5: Restarting bench..."
bench restart
echo "   ✅ Bench restarted"

echo ""
echo "=========================================="
echo "✨ Installation Complete!"
echo "=========================================="
echo ""
echo "📋 Next Steps:"
echo "   1. Login to your site: http://$SITE_NAME"
echo "   2. Click your profile icon (top-right)"
echo "   3. Select 'Switch Theme'"
echo "   4. Choose either:"
echo "      • Ibantu Golden (Professional)"
echo "      • Ibantu Canary (Vibrant)"
echo ""
echo "📚 Documentation:"
echo "   • Quick Start: $SCRIPT_DIR/QUICKSTART.md"
echo "   • Full Docs: $SCRIPT_DIR/README.md"
echo ""
echo "🎨 Enjoy your new theme!"
echo "=========================================="
