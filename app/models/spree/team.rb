module Spree
    class Team < ActiveRecord::Base
    	validates :title, presence: true        
      validates :description, presence: true
	    validate :images, presence: true
	    has_many :images, :as => :viewable, :order => :position, :dependent => :destroy
      
      attr_accessible :title, :description, :images_attributes
	    accepts_nested_attributes_for :images, allow_destroy: true
	end
end