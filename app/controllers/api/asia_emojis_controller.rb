class Api::AsiaEmojisController < ApplicationController
  def index
    @asia_tweets = TwitterApi.asia
    AsiaEmoji.create(emojis: @asia_tweets)
  end

  def show
    @asia_tweets = AsiaEmoji.last.emojis
  end
end
