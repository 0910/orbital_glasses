class RemoveEquipos < ActiveRecord::Migration
  def change
  	drop_table :spree_equipos
  end
end
