class Api::UsEmojisController < ApplicationController
  def index
    @us_tweets = TwitterApi.n_america 
    UsEmoji.create(emojis: @us_tweets)
  end

  def show
    @us_tweets = UsEmoji.last.emojis
  end
end
