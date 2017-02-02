class Api::EuropeEmojisController < ApplicationController
  def index
    @europe_tweets = TwitterApi.europe_tweets
    EuropeEmoji.create(emojis: @europe_tweets)
  end

  def show
    @europe_tweets = EuropeEmoji.last.emojis
  end
end
