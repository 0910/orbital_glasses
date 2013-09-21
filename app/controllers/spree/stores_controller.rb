module Spree
  class StoresController < BaseController
    layout 'spree/layouts/spree_application'
    if defined?(Spree::Dash)
      helper 'spree/analytics'
    end

    def index
      @stores = Store.all

    end

    def show
      @store = Store.find(params[:id])
    end
  end
end