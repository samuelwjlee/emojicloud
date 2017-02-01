require 'emoji_data'


class TwitterApi
  # def self.tweets
  #   sample = []
  #   client.filter(locations: '-122.75,36.8,-121.75,37.8') do |tweet|
  #     sample.push(tweet.text) if tweet.is_a?(Twitter::Tweet)
  #
  #     return sample if sample.length == 5
  #   end
  # end
  
  def self.tweets
    emoji = EmojiData.all
    emoji2 = emoji.slice(678, 77)
    emoji2 << emoji[97] << emoji[111] << emoji[164] << emoji[299] << emoji[483] << emoji[505]
    emoji = emoji.slice(700, 100)

    heart = 0
    count = 0
    word_cloud = {}
    client.filter(track: emoji2.join(",")) do |object|
      count += 1
      object.text.split(" ").each do |word|
        if emoji2.join("").include?(word)
          if word_cloud[word]
            word_cloud[word] += 1
          else
            word_cloud[word] = 1
          end
        end
      end
      return word_cloud if count == 300
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
