class Api::AfricaEmojisController < ApplicationController
  def index
    @africa_tweets = TwitterApi.africa_tweets
    AfricaEmoji.create(emojis: @africa_tweets)
  end

  def show
    @africa_tweets = AfricaEmoji.last.emojis
  end
end
