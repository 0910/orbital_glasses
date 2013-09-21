class ConsultasClientes < ActiveRecord::Migration
  def change
  	create_table :spree_consultas do |t|
  		t.string :name, :null => false
  		t.string :subject
  		t.string :email
  		t.text :body
  		t.string :tipo_consulta
  		t.timestamps

  	end
  end

end
