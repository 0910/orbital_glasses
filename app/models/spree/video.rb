module Spree
  class Video < ActiveRecord::Base
  	validates :title, presence: true
    validates :description, presence: true
    validates :url, format: URI::regexp(%w(http https))
    validate :images, presence: true
    has_many :images, :as => :viewable, :order => :position, :dependent => :destroy
 
    attr_accessible :title, :description, :url, :images_attributes, :_destroy
    accepts_nested_attributes_for :images, allow_destroy: true

	end
end