class Api::EmojisController < ApplicationController
  def index
    @tweets = TwitterApi.tweets
    Emoji.create(emojis: @tweets)
  end

  def show
    @tweets = Emoji.last
  end
end
