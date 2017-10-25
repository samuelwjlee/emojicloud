class Api::AmericaEmojisController < ApplicationController
  def index
    @america_tweets = TwitterApi.america
    AmericaEmoji.create(emojis: @america_tweets)
  end

  def show
    @america_tweets = AmericaEmoji.last.emojis
  end
end
