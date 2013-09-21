class ChangeNameMessageConsulta < ActiveRecord::Migration
  def change
  	rename_table :spree_messages, :spree_contacts
  end
end
