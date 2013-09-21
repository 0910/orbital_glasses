class AddEstadoConsultas < ActiveRecord::Migration
  def change
  	add_column :spree_contacts, :estado, :string
  end
end
