class Api::EmojisController < ApplicationController
  def index
    @tweets = TwitterApi.emoji
  end
end
