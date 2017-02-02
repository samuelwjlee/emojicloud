class Api::EuropeEmojisController < ApplicationController
  def index
    @europe_tweets = TwitterApi.europe_tweets
  end
end
