frappe.provide("frappe.ui");

frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
        super();
    }

    fetch_themes() {
        return new Promise((resolve) => {
            this.themes = [
                {
                    name: "light",
                    label: "Frappe Light",
                    info: "Light Theme",
                },
                {
                    name: "dark",
                    label: "Timeless Night",
                    info: "Dark Theme",
                },
                {
                    name: "automatic",
                    label: "Automatic",
                    info: "Uses system's theme to switch between light and dark mode",
                },
                {
                    name: "ibantu-golden",
                    label: "Ibantu Golden",
                    info: "Modern dark theme with golden yellow accents"
                },
                {
                    name: "ibantu-canary",
                    label: "Ibantu Canary",
                    info: "Vibrant dark theme with bright canary yellow"
                }
            ];

            resolve(this.themes);
        });
    }
};
