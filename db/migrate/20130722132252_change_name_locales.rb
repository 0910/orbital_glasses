class ChangeNameLocales < ActiveRecord::Migration
  def change
  	rename_table :spree_locales, :spree_locals
  end
end
