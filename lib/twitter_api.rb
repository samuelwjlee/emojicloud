class TwitterApi
  def self.tweets
    sample = []
    client.filter(locations: '-122.75,36.8,-121.75,37.8') do |tweet|
      sample.push(tweet.text) if tweet.is_a?(Twitter::Tweet)

      return sample if sample.length == 5
    end
  end

  def self.client
    @client ||= Twitter::Streaming::Client.new do |config|
      config.consumer_key = ENV["TWITTER_CONSUMER_KEY"]
      config.consumer_secret = ENV["TWITTER_CONSUMER_SECRET"]
      config.access_token = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_SECRET"]
    end
  end
end
