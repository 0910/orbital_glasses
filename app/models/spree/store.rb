module Spree
	class Store < ActiveRecord::Base
		validates :title, presence: true
    validates :description, presence: true
    validates :images, presence: true
    has_many :images, :as => :viewable, :order => :position, :dependent => :destroy

	  geocoded_by :address
	  after_validation :geocode, if: :address_changed?

    accepts_nested_attributes_for :images, allow_destroy: true
    attr_accessible :title, :description, :images_attributes, :address
	end
end