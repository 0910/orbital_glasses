class ChangeNameConsultasClientes < ActiveRecord::Migration
  def change
  	rename_table :spree_consultas, :spree_messages
  end
end
