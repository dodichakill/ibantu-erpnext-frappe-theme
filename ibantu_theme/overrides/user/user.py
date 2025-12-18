import frappe

@frappe.whitelist()
def switch_theme(theme):
	if theme in ["Dark", "Light", "Automatic", "Ibantu-golden", "Ibantu-canary"]:
		frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)
