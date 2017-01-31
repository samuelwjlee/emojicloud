class TwitterApi

  def self.our_public_tweets
    client.user_timeline('BBCNews', count: 1, exclude_replies: true)
  end

  def self.client
    @client ||= Twitter::REST::Client.new do |config|
      config.consumer_key = ENV['CONSUMER_KEY']
      config.consumer_secret = ENV['CONSUMER_SECRET']
    end
  end

end
