class ChangeTableTeams < ActiveRecord::Migration
  def change
  	rename_table :spree_teams, :spree_equipos
  end
end
