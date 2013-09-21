class ChangeTableNameTeam < ActiveRecord::Migration
  def change
  	rename_table :spree_team, :spree_teams
  end
end
