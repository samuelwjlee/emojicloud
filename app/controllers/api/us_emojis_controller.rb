class Api::UsEmojisController < ApplicationController
  def index
    @us_tweets = TwitterApi.us_tweets
    UsEmoji.create(emojis: @us_tweets)
  end

  def show
    @us_tweets = UsEmoji.last
  end
end
