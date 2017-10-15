class Api::AmericaEmojisController < ApplicationController
  def index
    @america_tweets = TwitterApi.n_america
    UsEmoji.create(emojis: @america_tweets)
  end

  def show
    @america_tweets = UsEmoji.last.emojis
  end
end
