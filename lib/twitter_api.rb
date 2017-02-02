require 'emoji_data'


class TwitterApi

  @emoji = EmojiData.all
  @emoji2 = @emoji.slice(678, 53)
  @emoji2.concat(@emoji.slice(746, 9))
  @emoji2.concat(@emoji.slice(409, 7))
  @emoji2.concat(@emoji.slice(458, 6))
  @emoji2.concat(@emoji.slice(482, 9))
  @emoji2 << @emoji[81] << @emoji[86] << @emoji[97] << @emoji[111] << @emoji[164] << @emoji[190] << @emoji[197] << @emoji[299] << @emoji[400] << @emoji[504] << @emoji[505] << @emoji[506] << @emoji[511] << @emoji[624] << @emoji[630]


  def self.tweets2
    emoji = EmojiData.all
    emoji2 = emoji.slice(678, 53)
    emoji2.concat(emoji.slice(746, 9))
    emoji2.concat(emoji.slice(409, 7))
    emoji2.concat(emoji.slice(458, 6))
    emoji2.concat(emoji.slice(482, 9))
    emoji2 << emoji[81] << emoji[86] << emoji[97] << emoji[111] << emoji[164] << emoji[190] << emoji[197] << emoji[299] << emoji[400] << emoji[504] << emoji[505] << emoji[506] << emoji[511] << emoji[624] << emoji[630]
    emoji = emoji.slice(600, 31)

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

  def self.us_tweets

    count = 0
    word_cloud = {}
    client.filter(locations: '-165.058594, 18.552532, -58.535156, 72.151523', track: @emoji2.join(",")) do |tweet|
      tweet.text.split(" ").each do |word|
        if @emoji2.join("").include?(word)
          count += 1
          if word_cloud[word]
            word_cloud[word][0] += 1
            # puts word_cloud[word][0]
            # puts word
            # puts count
          else
            word_cloud[word] = [1, tweet.text]
          end
        end
      end
      return word_cloud if count > 300
    end

  end

  def self.asia_tweets

    count = 0
    word_cloud = {}
    client.filter(locations: '60.996094, -49.217597, 171.386719, 48.392738', track: @emoji2.join(",")) do |tweet|
      tweet.text.split(" ").each do |word|
        if @emoji2.join("").include?(word)
          count += 1
          if word_cloud[word]
            word_cloud[word][0] += 1
            # puts word_cloud[word][0]
            # puts word
            # puts count
          else
            word_cloud[word] = [1, tweet.text]
          end
        end
      end
      return word_cloud if count > 300
    end

  end

  def self.africa_tweets

    count = 0
    word_cloud = {}
    client.filter(locations: '-22.675781, -38.899583, 52.910156, 35.092945', track: @emoji2.join(",")) do |tweet|
      tweet.text.split(" ").each do |word|
        if @emoji2.join("").include?(word)
          count += 1
          if word_cloud[word]
            word_cloud[word][0] += 1
            # puts word_cloud[word][0]
            # puts word
            # puts count
          else
            word_cloud[word] = [1, tweet.text]
          end
        end
      end
      return word_cloud if count > 300
    end

  end

  def self.europe_tweets

    count = 0
    word_cloud = {}
    client.filter(locations: '-46.230469, 35.666222, 73.300781, 75.906829', track: @emoji2.join(",")) do |tweet|
      tweet.text.split(" ").each do |word|
        if @emoji2.join("").include?(word)
          count += 1
          if word_cloud[word]
            word_cloud[word][0] += 1
            # puts word_cloud[word][0]
            # puts word
            # puts count
          else
            word_cloud[word] = [1, tweet.text]
          end
        end
      end
      return word_cloud if count > 300
    end

  end

  def self.tweets
    emoji = EmojiData.all
    emoji2 = emoji.slice(678, 53)
    emoji2.concat(emoji.slice(746, 9))
    emoji2.concat(emoji.slice(409, 7))
    emoji2.concat(emoji.slice(458, 6))
    emoji2.concat(emoji.slice(482, 9))
    emoji2 << emoji[81] << emoji[86] << emoji[97] << emoji[111] << emoji[164] << emoji[190] << emoji[197] << emoji[299] << emoji[400] << emoji[504] << emoji[505] << emoji[506] << emoji[511] << emoji[624] << emoji[630]
    emoji = emoji.slice(600, 31)

    count = 0
    word_cloud = {}
    client.filter(track: emoji2.join(",")) do |object|
      count += 1
      object.text.split(" ").each do |word|
        if emoji2.join("").include?(word)
          if word_cloud[word]
            word_cloud[word][0] += 1
          else
            word_cloud[word] = [1, object.text]
          end
        end
      end
      return word_cloud if count == 300
    end
  end

  def self.sf_tweets
    emoji = EmojiData.all
    word_cloud = {}
    client.filter(locations: '-122.75,36.8,-121.75,37.8') do |tweet|
      if emoji.join("").include?(word)
        if word_cloud[word]
          word_cloud[word] += 1
        else
          word_cloud[word] = 1
        end
      end
      if word_cloud[word]
        puts "#{word}: #{word_cloud[word]}"
      end
      puts tweet.text if tweet.is_a?(Twitter::Tweet)
    end
  end

  def self.emoji2
    emoji = EmojiData.all
    emoji2 = emoji.slice(678, 53)
    emoji2.concat(emoji.slice(746, 9))
    emoji2.concat(emoji.slice(409, 7))
    emoji2.concat(emoji.slice(458, 6))
    emoji2.concat(emoji.slice(482, 9))
    emoji2 << emoji[81] << emoji[86] << emoji[97] << emoji[111] << emoji[164] << emoji[190] << emoji[197] << emoji[299] << emoji[400] << emoji[504] << emoji[505] << emoji[506] << emoji[511] << emoji[624] << emoji[630]
    emoji = emoji.slice(600, 31)

    # puts emoji.length
    # emoji2.each_with_index do |emoji, i|
    #   puts i
    #   puts emoji
    # end
    # puts emoji2.length
    # heart = 0
    word_cloud = {}
    # client.filter(track: emoji2.join(",")) do |object|
    client.filter(locations: '-122.75,36.8,-121.75,37.8') do |object|
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

  def self.all_tweets
    client.sample do |tweet|
      # puts tweet.text if tweet.is_a?(Twitter::Tweet)
      emoji = EmojiData.all
      word_cloud = {}
      if tweet.is_a?(Twitter::Tweet)
        tweet.text.split(" ").each do |word|
          # puts word
          if emoji.join("").include?(word)
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
      end
      # puts tweet.text if tweet.is_a?(Twitter::Tweet)
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

  def self.emoji
    emoji = EmojiData.all
    emoji2 = emoji.slice(678, 53)
    emoji2.concat(emoji.slice(746, 9))
    emoji2.concat(emoji.slice(409, 7))
    emoji2.concat(emoji.slice(458, 6))
    emoji2.concat(emoji.slice(482, 9))
    emoji2 << emoji[81] << emoji[86] << emoji[97] << emoji[111] << emoji[164] << emoji[190] << emoji[197] << emoji[299] << emoji[400] << emoji[504] << emoji[505] << emoji[506] << emoji[511] << emoji[624] << emoji[630]
    emoji = emoji.slice(600, 31)

    puts emoji.length
    emoji.each_with_index do |emo, i|
      puts i
      puts emo
    end
    puts emoji2.length
  end

  def self.client
    @client ||= Twitter::Streaming::Client.new do |config|
      config.consumer_key = ENV["TWITTER_CONSUMER_KEY"]
      config.consumer_secret = ENV["TWITTER_CONSUMER_SECRET"]
      config.access_token = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_SECRET"]
    end
  end

  # def self.tweets
  #   sample = []
  #   client.filter(locations: '-122.75,36.8,-121.75,37.8') do |tweet|
  #     sample.push(tweet.text) if tweet.is_a?(Twitter::Tweet)
  #
  #     return sample if sample.length == 5
  #   end
  # end


end
