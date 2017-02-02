class Api::AfricaEmojisController < ApplicationController
  def index
    @africa_tweets = TwitterApi.africa_tweets
  end
end
