class ChangeVideoDescription < ActiveRecord::Migration
  def change
  	change_column :spree_videos, :description, :text
  end
end
