class TwitterApi

  # def self.our_public_tweets
  #   client.user_timeline('BBCNews', count: 1, exclude_replies: true)
  # end
  #
  # def self.dt_tweets
  #   client.user_timeline('Donald Trump', exclude_replies: true)
  # end
  #
  # def self.client
  #   @client ||= Twitter::REST::Client.new do |config|
  #     config.consumer_key = ENV['CONSUMER_KEY']
  #     config.consumer_secret = ENV['CONSUMER_SECRET']
  #   end
  # end

  def self.tweets
    client.filter(locations: '-122.75,36.8,-121.75,37.8') do |tweet|
      puts tweet.text if tweet.is_a?(Twitter::Tweet)
    end
  end

  def self.client
    @client ||= Twitter::Streaming::Client.new do |config|
      config.consumer_key = ENV["CONSUMER_KEY"]
      config.consumer_secret = ENV["CONSUMER_SECRET"]
      config.access_token = ENV["ACCESS_TOKEN"]
      config.access_token_secret = ENV["ACCESS_SECRET"]
    end
  end

end
