class AddVideos < ActiveRecord::Migration
  def change
  	create_table :spree_videos do |t|
    	t.string :title, null: false
    	t.string :description
    	t.string :url, null: false
      t.timestamps
    end
  end
end
