class CreateSpreeTeams < ActiveRecord::Migration
  def change
  	create_table :spree_teams do |t|
  		t.string :title, null: false
  		t.timestamps
  	end
  end

end
