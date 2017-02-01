98 lines (87 sloc)  2.59 KB
require 'emoji_data'

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
    client.sample do |tweet|
      puts tweet.text if tweet.is_a?(Twitter::Tweet)
    end
  end

  def self.sf_tweets
    emoji = EmojiData.all
    client.filter(locations: '-122.75,36.8,-121.75,37.8') do |tweet|
      puts EmojiData.all.count(tweet)
      puts emoji.count
      puts tweet.text if tweet.is_a?(Twitter::Tweet)
    end
  end

  # def self.emoji
  #   emoji = EmojiData.all
  #   emoji2 = emoji.slice(678, 77)
  #   emoji2 << emoji[97] << emoji[111] << emoji[164] << emoji[299] << emoji[483] << emoji[505]
  #   emoji = emoji.slice(700, 100)
  #
  #   puts emoji.length
  #   emoji2.each_with_index do |emoji, i|
  #     puts i
  #     puts emoji
  #   end
  #   puts emoji2.length
  #
  #   client.filter(track: emoji.join(",")) do |object|
  #
  #     puts object.text if object.is_a?(Twitter::Tweet)
  #   end
  # end

  def self.emoji2
    emoji = EmojiData.all
    emoji2 = emoji.slice(678, 77)
    emoji2 << emoji[97] << emoji[111] << emoji[164] << emoji[299] << emoji[483] << emoji[505]
    emoji = emoji.slice(700, 100)

    puts emoji.length
    emoji2.each_with_index do |emoji, i|
      puts i
      puts emoji
    end
    puts emoji2.length
    heart = 0
    word_cloud = {}
    client.filter(track: emoji2.join(",")) do |object|
      object.text.split(" ").each do |word|
        # puts word
        if emoji2.join("").include?(word)
          if word_cloud[word]
            word_cloud[word] += 1
          else
            word_cloud[word] = 1
          end
        end
        # common = ["RT", "the", "a", "you", "I", "me", "to", "at", "and", "so", "for", "in", "de", "my", "que", "no", "this", "is", "of", "This"]
        if word_cloud[word]  #&& !common.include?(word) && emoji2.join(",").include?(word)
          puts "#{word}: #{word_cloud[word]}"
        end
      end

      # puts object.text if object.is_a?(Twitter::Tweet)
    end
  end

  def self.client
    @client ||= Twitter::Streaming::Client.new do |config|
      config.consumer_key = ENV['CONSUMER_KEY']
      config.consumer_secret = ENV['CONSUMER_SECRET']
      config.access_token = ENV['ACCESS_TOKEN']
      config.access_token_secret = ENV['ACCESS_SECRET']
    end
  end

end
