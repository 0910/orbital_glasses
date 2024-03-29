module Spree
  class Asset < ActiveRecord::Base
    belongs_to :viewable, polymorphic: true, touch: true
    acts_as_list scope: :viewable
    attr_accessible :cover
  end
end