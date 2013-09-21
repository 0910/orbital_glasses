class RenameMixes < ActiveRecord::Migration
  def change
  	rename_table :mixes, :spree_mixes
  end

end
