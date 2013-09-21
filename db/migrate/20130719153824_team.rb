class Team < ActiveRecord::Migration
  def change
  	create_table :spree_team do |t|
  		t.string :title, null: false
  		t.text :description, null: false
  		t.timestamps
  	end
  end
end