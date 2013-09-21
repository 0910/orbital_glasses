class ChangeLocalsForStores < ActiveRecord::Migration
  def change
  	rename_table :spree_locals, :spree_stores
  end

end
