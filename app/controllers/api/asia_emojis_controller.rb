class Api::AsiaEmojisController < ApplicationController
  def index
    @asia_tweets = TwitterApi.asia_tweets
    AsiaEmoji.create(emojis: @asia_tweets)
  end

  def show
    @asia_tweets = AsiaEmoji.last
  end
end
