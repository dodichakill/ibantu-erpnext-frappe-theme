import "./theme-switcher.js";

console.log("🎨 Ibantu Theme Loaded - Modern Yellow Themes Available!");

// Add custom styling enhancements
frappe.ready(() => {
  // Add smooth transitions to theme changes
  document.documentElement.style.setProperty(
    "transition",
    "background-color 0.3s ease, color 0.3s ease"
  );

  // Add custom class for enhanced animations
  if (document.body) {
    document.body.classList.add("ibantu-theme-active");
  }
});
