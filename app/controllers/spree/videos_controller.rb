module Spree
  class VideosController < BaseController
    layout 'spree/layouts/spree_application'
    if defined?(Spree::Dash)
      helper 'spree/analytics'
    end

    def index
      @videos = Video.all

    end

    def show
      @video = Video.find(params[:id])
    end
  end
end