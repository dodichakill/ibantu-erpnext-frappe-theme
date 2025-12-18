// Initialize Ibantu Themes
console.log("🎨 Initializing Ibantu Themes...");

// Wait for Frappe to be ready
frappe.ready(() => {
  console.log("✅ Frappe ready, registering Ibantu themes...");

  // Register custom themes
  if (frappe.boot && frappe.boot.desk_settings) {
    // Add themes to boot settings if not already there
    if (!frappe.boot.desk_settings.themes) {
      frappe.boot.desk_settings.themes = [];
    }

    const ibantuThemes = [
      {
        name: "ibantu-golden",
        label: "Ibantu Golden",
        info: "Modern dark theme with golden yellow accents - professional and elegant",
      },
      {
        name: "ibantu-canary",
        label: "Ibantu Canary",
        info: "Vibrant dark theme with bright canary yellow - energetic and modern",
      },
    ];

    // Add themes if not already registered
    ibantuThemes.forEach((theme) => {
      const exists = frappe.boot.desk_settings.themes.some(
        (t) => t.name === theme.name
      );
      if (!exists) {
        frappe.boot.desk_settings.themes.push(theme);
        console.log(`✅ Registered theme: ${theme.label}`);
      }
    });
  }
});

// Apply theme on load if set
document.addEventListener("DOMContentLoaded", () => {
  const currentTheme = localStorage.getItem("desk_theme");

  if (currentTheme === "ibantu-golden" || currentTheme === "ibantu-canary") {
    console.log(`🎨 Applying saved theme: ${currentTheme}`);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }
});
