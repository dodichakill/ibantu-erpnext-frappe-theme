frappe.provide("frappe.ui");

frappe.ui.ThemeSwitcher = class IbantuThemeSwitcher extends (
  frappe.ui.ThemeSwitcher
) {
  constructor() {
    super();
  }

  fetch_themes() {
    return new Promise((resolve) => {
      this.themes = [
        {
          name: "light",
          label: __("Frappe Light"),
          info: __("Light Theme"),
        },
        {
          name: "dark",
          label: __("Timeless Night"),
          info: __("Dark Theme"),
        },
        {
          name: "automatic",
          label: __("Automatic"),
          info: __("Uses system's theme to switch between light and dark mode"),
        },
        {
          name: "ibantu-golden",
          label: __("Ibantu Golden"),
          info: __(
            "Modern dark theme with golden yellow accents - professional and elegant"
          ),
          description: __(
            "A sophisticated dark theme featuring rich golden yellow colors, perfect for extended work sessions"
          ),
        },
        {
          name: "ibantu-canary",
          label: __("Ibantu Canary"),
          info: __(
            "Vibrant dark theme with bright canary yellow - energetic and modern"
          ),
          description: __(
            "An energetic theme with bright canary yellow highlights, designed for a fresh and modern look"
          ),
        },
      ];

      resolve(this.themes);
    });
  }
};
