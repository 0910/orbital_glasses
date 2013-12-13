module Spree
  class NoticesController < BaseController
    layout 'spree/layouts/spree_application'
    if defined?(Spree::Dash)
      helper 'spree/analytics'
    end

    def index
      @notices = Notice.all

    end

    def show
      @notice = Notice.find(params[:id])
      @description = @notice.description.split(/\r\n/)

    end
  end
end