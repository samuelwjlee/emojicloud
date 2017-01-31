class Api::EmojisController < ApplicationController
  def index
    render json: TwtterApi.tweets
  end
end
