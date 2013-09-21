module Spree
	class Mix < ActiveRecord::Base
	  validates :title, presence: true
    validates :description, presence: true
    validates :url, format: URI::regexp(%w(http https))
    validates :image, presence: true
    validates :dj_name, presence: true
    has_one :image, :as => :viewable, :order => :position, :dependent => :destroy

    accepts_nested_attributes_for :image
    attr_accessible :title, :description, :image_attributes, :url, :dj_name
	end
end