Deface::Override.new(
  virtual_path: 'spree/layouts/admin',
  insert_top: 'div.main-menu-wrapper',
  partial: 'spree/admin/shared/extra_menu_items',
  name: 'extra_menu_items',
  disabled: false,
)
Deface::Override.new(
	virtual_path: "spree/layouts/admin",
	remove: '[data-hook=admin_tabs]',
  insert_bottom: '[id=admin-menu]',
  partial: 'spree/admin/shared/menu_items',
  name: 'menu_items',
  disabled: false,
)

Deface::Override.new(:virtual_path  => "spree/layouts/admin",
   replace: "#header code[erb-loud]:contains('[:admin_interface_logo]')",
   text: '<div id="logo"></div>',
   name: 'foundry_admin_logo',
   disabled: false)
