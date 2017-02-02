class Api::UsEmojisController < ApplicationController
  def index
    @us_tweets = TwitterApi.us_tweets
  end

  def create
  end

  def show
  end
end
