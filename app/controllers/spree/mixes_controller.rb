module Spree
  class MixesController < BaseController
    layout 'spree/layouts/spree_application'
    if defined?(Spree::Dash)
      helper 'spree/analytics'
    end

    def index
      @mixes = Mix.all

    end

    def show
      @mix = Mix.find(params[:id])
    end
  end
end