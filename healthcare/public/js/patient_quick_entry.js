frappe.provide('frappe.ui.form');

frappe.ui.form.PatientQuickEntryForm = class PatientQuickEntryForm extends frappe.ui.form.QuickEntryForm {

	constructor(doctype, after_insert, init_callback, doc, force) {
		super(doctype, after_insert, init_callback, doc, force);
		this.skip_redirect_on_error = true;
	}

	render_dialog() {

		// filter fields for quick entry which are not wired in standard_fields
		let custom_fields = this.mandatory.filter(
			field => !this.get_standard_fields().map(field => field.fieldname).includes(field.fieldname)
		);

		this.mandatory = this.get_standard_fields();

		// preserve standard_fields order, splice custom fields after Patient name fields
		this.mandatory.splice(3, 0, ...custom_fields);

		super.render_dialog();
	}

	get_standard_fields() {
		return [
			// {
			// 	label: __('Identification Number (UID)'),
			// 	fieldname: 'uid',
			// 	fieldtype: 'Data'
			// },
			
			// {
			// 	label: __('First Name'),
			// 	fieldname: 'first_name',
			// 	fieldtype: 'Data'
			// },
			
			// {
			// 	label: __('Gender'),
			// 	fieldname: 'sex',
			// 	fieldtype: 'Link',
			// 	options: 'Gender'
			// },
			
			// {
			// 	label: __('Mobile Number'),
			// 	fieldname: 'mobile',
			// 	fieldtype: 'Data',
			// 	options: 'Phone'
			// },
			
		];
	}
}