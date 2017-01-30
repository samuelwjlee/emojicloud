class TwitterApi
  def self.tweets
    client.search('place%3A07d9cd6afd884001', options = {})
  end

  def self.client
    @client ||= Twitter::REST::Client.new do |config|
      config.consumer_key = ENV["TWITTER_CONSUMER_KEY"]
      config.consumer_secret = ENV["TWITTER_CONSUMER_SECRET"]
    end
  end
end
