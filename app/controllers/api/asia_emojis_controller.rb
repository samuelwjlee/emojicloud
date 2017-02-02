class Api::AsiaEmojisController < ApplicationController
  def index
    @asia_tweets = TwitterApi.asia_tweets
  end
end
