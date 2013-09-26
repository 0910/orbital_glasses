module Spree
  class TypesController < BaseController
    layout 'spree/layouts/spree_application'
    if defined?(Spree::Dash)
      helper 'spree/analytics'
    end

    def index
      if (params.has_key?(:types))
        @types = Spree::Taxon.find_by_permalink!(params[:types])
        @products = Spree::Product.in_taxon(@types)
        @taxons = Spree::Taxon.where('permalink like ?', "%#{params[:types]}%")
      else
        @products = Array.new
        @product_taxon = Hash.new

        @filter = Spree::Taxon.where('permalink like ?', "%#{params[:filter]}%")
        @filter.each do |filter|
          @product_taxon = ActiveRecord::Base.connection.select_all("SELECT * FROM spree_products_taxons WHERE taxon_id = #{filter.id}");
          unless @product_taxon.empty?
            @product_taxon.each do |tax|
              @lala = tax[:product_id]
              @products += Spree::Product.find(:all, :conditions => {:id => tax[:product_id]})
            end
          end
        end
        @taxons = Spree::Taxon.where('permalink like ?', "%#{params[:filter]}%")
      end
    end
  end
end