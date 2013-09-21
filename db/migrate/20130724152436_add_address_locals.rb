class AddAddressLocals < ActiveRecord::Migration
  def change
  	add_column :spree_locals, :latitude, :float
  	add_column :spree_locals, :longitude, :float
  	add_column :spree_locals, :address, :string
  end
end
