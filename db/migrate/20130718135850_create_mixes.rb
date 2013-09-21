class CreateMixes < ActiveRecord::Migration
  def change
    create_table :mixes do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :url, null: false
      t.string :dj_name, null: false
      t.timestamps
    end
  end
end
