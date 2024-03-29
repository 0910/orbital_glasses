module Spree
  class TeamsController < BaseController
    layout 'spree/layouts/spree_application'
    if defined?(Spree::Dash)
      helper 'spree/analytics'
    end

    def index
      @teams = Team.all

    end

    def show
      @team = Team.find(params[:id])
      @description = @team.description.split(/\r\n/)
    end
  end
end