class Api::AfricaEmojisController < ApplicationController
  def index
    @africa_tweets = TwitterApi.africa_tweets
  end

  def create
  end

  def show
  end
end
