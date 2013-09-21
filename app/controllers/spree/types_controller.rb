module Spree
  class TypesController < BaseController
    layout 'spree/layouts/spree_application'
    if defined?(Spree::Dash)
      helper 'spree/analytics'
    end

    def index
      @types = Spree::Taxon.find_by_name!(params[:types])
      @products = Spree::Product.in_taxon(@types)
      @taxons = Spree::Taxon.all
      @taxonomy = Spree::Taxonomy.all
    end
  end
end