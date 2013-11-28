class RenameNewsToNotices < ActiveRecord::Migration
  def change
  	rename_table :spree_news, :spree_notices
  end
end
