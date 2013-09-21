class CreateLocales < ActiveRecord::Migration
  def change
  	create_table :spree_locales do |t|
  		t.string :title, null: false
  		t.text :description 
  		t.timestamps
  	end
  end

end
