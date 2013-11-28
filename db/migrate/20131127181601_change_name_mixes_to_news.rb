class ChangeNameMixesToNews < ActiveRecord::Migration
  def change
  	remove_column :spree_mixes, :dj_name
  	rename_table :spree_mixes, :spree_news
  end
end
