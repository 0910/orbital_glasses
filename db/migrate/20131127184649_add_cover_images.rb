class AddCoverImages < ActiveRecord::Migration
  def change
  	add_column :spree_assets, :cover, :boolean, :default => false
  end
end
