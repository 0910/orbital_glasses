module Spree
	class Notice < ActiveRecord::Base
	  validates :title, presence: true
    validates :description, presence: true
    validates :url, format: URI::regexp(%w(http https))
    validates :images, presence: true
    has_many :images, :as => :viewable, :order => :position, :dependent => :destroy

    accepts_nested_attributes_for :images, allow_destroy: true
    attr_accessible :title, :description, :images_attributes, :url
	end
end