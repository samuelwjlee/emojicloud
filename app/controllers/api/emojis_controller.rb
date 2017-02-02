class Api::EmojisController < ApplicationController
  def index
    @tweets = TwitterApi.tweets
  end

  def create
  end

  def show
  end
end
