module Spree
	class Contact < ActiveRecord::Base
        validates :name, presence: true
        attr_accessible :name, :subject, :email, :body, :tipo_consulta, :estado
	end
end