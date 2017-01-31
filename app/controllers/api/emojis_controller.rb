class Api::EmojisController < ApplicationController
  def index
    @tweets = TwitterApi.tweets
  end
end
