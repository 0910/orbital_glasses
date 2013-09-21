class AddDescriptionTeams < ActiveRecord::Migration
  def change
  	add_column :spree_teams, :description, :text
  end
end
