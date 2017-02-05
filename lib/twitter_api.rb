require 'emoji_data'

class TwitterApi

  @emoji = EmojiData.all
  @emoji2 = @emoji.slice(678, 53)
  @emoji2.concat(@emoji.slice(746, 9))
  @emoji2.concat(@emoji.slice(409, 7))
  @emoji2.concat(@emoji.slice(458, 6))
  @emoji2.concat(@emoji.slice(482, 9))
  @emoji2 << @emoji[81] << @emoji[86] << @emoji[97] << @emoji[111] << @emoji[164] << @emoji[190] << @emoji[197] << @emoji[299] << @emoji[400] << @emoji[504] << @emoji[505] << @emoji[506] << @emoji[511] << @emoji[624] << @emoji[630]

  EUROPE = '-46.230469, 35.666222, 73.300781, 75.906829'
  N_AMERICA = '-165.058594, 18.552532, -58.535156, 72.151523'
  AFRICA = '-22.675781, -38.899583, 52.910156, 35.092945'
  ASIA = '60.996094, -49.217597, 171.386719, 48.392738'
  EMOJI_REGEX = /[\u{203C}\u{2049}\u{20E3}\u{2122}\u{2139}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{24C2}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2600}-\u{2601}\u{260E}\u{2611}\u{2614}-\u{2615}\u{261D}\u{263A}\u{2648}-\u{2653}\u{2660}\u{2663}\u{2665}-\u{2666}\u{2668}\u{267B}\u{267F}\u{2693}\u{26A0}-\u{26A1}\u{26AA}-\u{26AB}\u{26BD}-\u{26BE}\u{26C4}-\u{26C5}\u{26CE}\u{26D4}\u{26EA}\u{26F2}-\u{26F3}\u{26F5}\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}-\u{270C}\u{270F}\u{2712}\u{2714}\u{2716}\u{2728}\u{2733}-\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}-\u{2755}\u{2757}\u{2764}\u{2795}-\u{2797}\u{27A1}\u{27B0}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1E7}-\u{1F1EC}\u{1F1EE}-\u{1F1F0}\u{1F1F3}\u{1F1F5}\u{1F1F7}-\u{1F1FA}\u{1F201}-\u{1F202}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F250}-\u{1F251}\u{1F300}-\u{1F320}\u{1F330}-\u{1F335}\u{1F337}-\u{1F37C}\u{1F380}-\u{1F393}\u{1F3A0}-\u{1F3C4}\u{1F3C6}-\u{1F3CA}\u{1F3E0}-\u{1F3F0}\u{1F400}-\u{1F43E}\u{1F440}\u{1F442}-\u{1F4F7}\u{1F4F9}-\u{1F4FC}\u{1F500}-\u{1F507}\u{1F509}-\u{1F53D}\u{1F550}-\u{1F567}\u{1F5FB}-\u{1F640}\u{1F645}-\u{1F64F}\u{1F680}-\u{1F68A}]/


  def self.data(region)
    tweets = []
    client.filter(locations: region) do |tweet|
      tweets << tweet
      # print "-"
      return tweets if tweets.count > 1000
    end
  end

  def self.world_data
    tweets = []
    client.filter(track: @emoji2.join(",")) do |tweet|
      tweets << tweet
      # print "-"
      return tweets if tweets.count > 300
    end
  end

  def self.world_data2
    tweets = []
    client.sample do |tweet|
      if tweet.is_a?(Twitter::Tweet)
        tweets << tweet
        # print "-"
        return tweets if tweets.count > 1000
      end
    end
  end

  def self.location(arr)
    arr.each do |tweet|
      puts "#{tweet.attrs[:user][:location]}  #{tweet.attrs[:coordinates]}"
    end
  end

  def self.sort(arr)
    word_cloud = {}
    count = 0;
    # emoji_regex = /[\u{203C}\u{2049}\u{20E3}\u{2122}\u{2139}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{24C2}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2600}-\u{2601}\u{260E}\u{2611}\u{2614}-\u{2615}\u{261D}\u{263A}\u{2648}-\u{2653}\u{2660}\u{2663}\u{2665}-\u{2666}\u{2668}\u{267B}\u{267F}\u{2693}\u{26A0}-\u{26A1}\u{26AA}-\u{26AB}\u{26BD}-\u{26BE}\u{26C4}-\u{26C5}\u{26CE}\u{26D4}\u{26EA}\u{26F2}-\u{26F3}\u{26F5}\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}-\u{270C}\u{270F}\u{2712}\u{2714}\u{2716}\u{2728}\u{2733}-\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}-\u{2755}\u{2757}\u{2764}\u{2795}-\u{2797}\u{27A1}\u{27B0}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1E7}-\u{1F1EC}\u{1F1EE}-\u{1F1F0}\u{1F1F3}\u{1F1F5}\u{1F1F7}-\u{1F1FA}\u{1F201}-\u{1F202}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F250}-\u{1F251}\u{1F300}-\u{1F320}\u{1F330}-\u{1F335}\u{1F337}-\u{1F37C}\u{1F380}-\u{1F393}\u{1F3A0}-\u{1F3C4}\u{1F3C6}-\u{1F3CA}\u{1F3E0}-\u{1F3F0}\u{1F400}-\u{1F43E}\u{1F440}\u{1F442}-\u{1F4F7}\u{1F4F9}-\u{1F4FC}\u{1F500}-\u{1F507}\u{1F509}-\u{1F53D}\u{1F550}-\u{1F567}\u{1F5FB}-\u{1F640}\u{1F645}-\u{1F64F}\u{1F680}-\u{1F68A}]/
    arr.each do |tweet|
      
      tweet2 = (EMOJI_REGEX.match(tweet.text)).to_s
        tweet2.split(" ").each do |word|
          if @emoji.join("").include?(word)
            # print count += 1
            if word_cloud[word]
              word_cloud[word][0] += 1

            else
              word_cloud[word] = [1, tweet.text, tweet.attrs[:user][:location], tweet.attrs[:coordinates], tweet.attrs[:user][:screen_name]]
            end
          end
        end
      # print "."
    end

    puts word_cloud
    return word_cloud
  end

  def self.europe
    # puts Time.now
    # location(data(EUROPE)) #test locations
    sort(data(EUROPE))
    # puts Time.now
  end

  def self.n_america
    #location(data(N_AMERICA))
    sort(data(N_AMERICA))
  end

  def self.africa
    # location(data(AFRICA)) #test locations
    sort(data(AFRICA))
  end

  def self.asia
    # location(data(ASIA)) #test locations
    sort(data(ASIA))
  end

  def self.world
    sort(world_data)
  end

  def self.world2
    sort(world_data2)
  end

  def self.stream_world
    client.sample do |tweet|
      puts tweet.text if tweet.is_a?(Twitter::Tweet)
    end
  end

  def self.stream(region)
    client.filter(locations: region) do |tweet|
      puts "#{tweet.text}  Location: #{tweet.attrs[:user][:location]} Coordinates: #{tweet.attrs[:user][:location]}" if tweet.is_a?(Twitter::Tweet)
    end
  end

  def self.stream_asia
    stream(ASIA)
  end

  def self.stream_europe
    stream(EUROPE)
  end

  def self.stream_n_america
    stream(N_AMERICA)
  end

  def self.stream_africa
    stream(AFRICA)
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

    heart = 0
    count = 0
    word_cloud = {}
    client.filter(locations: '-165.058594, 18.552532, -58.535156, 72.151523', track: emoji2.join(",")) do |object|
      count += 1
      object.text.split(" ").each do |word|
        if emoji2.join("").include?(word)
          if word_cloud[word]
            word_cloud[word][0] += 1
            # puts word_cloud[word][0]
            # puts word
            # puts count
          else
            word_cloud[word] = [1, object.text, object.attrs[:user][:location], object.attrs[:coordinates], object.attrs[:coordinates]]
          end
        end
      end
      # puts object.methods
      # puts object.instance_variables.map{|var| puts [var, object.instance_variable_get(var)].join(":")}
    #  puts object.instance_variables.map{ |var| puts [var, ""].join(":")}
      # puts object.instance_variable_get(@_memoized_method_cache)
      # puts "hello"
      # puts object.attrs
      # puts object.attrs[:place]
      # puts object.attrs[:user][:screen_name]
      return word_cloud if count == 20
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
            word_cloud[word] = [1, tweet.text, tweet.attrs[:user][:location], tweet.attrs[:coordinates], tweet.attrs[:user][:screen_name]]
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
            word_cloud[word] = [1, tweet.text, tweet.attrs[:user][:location], tweet.attrs[:coordinates], tweet.attrs[:user][:screen_name]]
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
            word_cloud[word] = [1, tweet.text, tweet.attrs[:user][:location], tweet.attrs[:coordinates], tweet.attrs[:user][:screen_name]]
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
            word_cloud[word] = [1, tweet.text, tweet.attrs[:user][:location], tweet.attrs[:coordinates], tweet.attrs[:user][:screen_name]]
          end
        end
      end
      return word_cloud if count > 300
    end

  end

  def self.world_tweets
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
            word_cloud[word] = [1, object.text, object.attrs[:user][:location], object.attrs[:coordinates], object.attrs[:user][:screen_name]]
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
      puts tweet.text if tweet.is_a?(Twitter::Tweet)
      # emoji = EmojiData.all
      # word_cloud = {}
      # if tweet.is_a?(Twitter::Tweet)
      #   tweet.text.split(" ").each do |word|
      #     # puts word
      #     if emoji.join("").include?(word)
      #       if word_cloud[word]
      #         word_cloud[word] += 1
      #       else
      #         word_cloud[word] = 1
      #       end
      #     end
      #     # common = ["RT", "the", "a", "you", "I", "me", "to", "at", "and", "so", "for", "in", "de", "my", "que", "no", "this", "is", "of", "This"]
      #     if word_cloud[word]  #&& !common.include?(word) && emoji2.join(",").include?(word)
      #       puts "#{word}: #{word_cloud[word]}"
      #     end
      #   end
      # end
      # puts tweet.text if tweet.is_a?(Twitter::Tweet)
    end
  end

  def self.sf_tweets
    emoji = EmojiData.all
    client.filter(locations: '-122.75,36.8,-121.75,37.8') do |tweet|
      # puts EmojiData.all.count(tweet)
      # puts emoji.count
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

# [\u{203C}\u{2049}\u{20E3}\u{2122}\u{2139}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{24C2}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2600}-\u{2601}\u{260E}\u{2611}\u{2614}-\u{2615}\u{261D}\u{263A}\u{2648}-\u{2653}\u{2660}\u{2663}\u{2665}-\u{2666}\u{2668}\u{267B}\u{267F}\u{2693}\u{26A0}-\u{26A1}\u{26AA}-\u{26AB}\u{26BD}-\u{26BE}\u{26C4}-\u{26C5}\u{26CE}\u{26D4}\u{26EA}\u{26F2}-\u{26F3}\u{26F5}\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}-\u{270C}\u{270F}\u{2712}\u{2714}\u{2716}\u{2728}\u{2733}-\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}-\u{2755}\u{2757}\u{2764}\u{2795}-\u{2797}\u{27A1}\u{27B0}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1E7}-\u{1F1EC}\u{1F1EE}-\u{1F1F0}\u{1F1F3}\u{1F1F5}\u{1F1F7}-\u{1F1FA}\u{1F201}-\u{1F202}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F250}-\u{1F251}\u{1F300}-\u{1F320}\u{1F330}-\u{1F335}\u{1F337}-\u{1F37C}\u{1F380}-\u{1F393}\u{1F3A0}-\u{1F3C4}\u{1F3C6}-\u{1F3CA}\u{1F3E0}-\u{1F3F0}\u{1F400}-\u{1F43E}\u{1F440}\u{1F442}-\u{1F4F7}\u{1F4F9}-\u{1F4FC}\u{1F500}-\u{1F507}\u{1F509}-\u{1F53D}\u{1F550}-\u{1F567}\u{1F5FB}-\u{1F640}\u{1F645}-\u{1F64F}\u{1F680}-\u{1F68A}]
# regex = /[\u{203C}\u{2049}\u{20E3}\u{2122}\u{2139}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{24C2}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2600}-\u{2601}\u{260E}\u{2611}\u{2614}-\u{2615}\u{261D}\u{263A}\u{2648}-\u{2653}\u{2660}\u{2663}\u{2665}-\u{2666}\u{2668}\u{267B}\u{267F}\u{2693}\u{26A0}-\u{26A1}\u{26AA}-\u{26AB}\u{26BD}-\u{26BE}\u{26C4}-\u{26C5}\u{26CE}\u{26D4}\u{26EA}\u{26F2}-\u{26F3}\u{26F5}\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}-\u{270C}\u{270F}\u{2712}\u{2714}\u{2716}\u{2728}\u{2733}-\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}-\u{2755}\u{2757}\u{2764}\u{2795}-\u{2797}\u{27A1}\u{27B0}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1E7}-\u{1F1EC}\u{1F1EE}-\u{1F1F0}\u{1F1F3}\u{1F1F5}\u{1F1F7}-\u{1F1FA}\u{1F201}-\u{1F202}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F250}-\u{1F251}\u{1F300}-\u{1F320}\u{1F330}-\u{1F335}\u{1F337}-\u{1F37C}\u{1F380}-\u{1F393}\u{1F3A0}-\u{1F3C4}\u{1F3C6}-\u{1F3CA}\u{1F3E0}-\u{1F3F0}\u{1F400}-\u{1F43E}\u{1F440}\u{1F442}-\u{1F4F7}\u{1F4F9}-\u{1F4FC}\u{1F500}-\u{1F507}\u{1F509}-\u{1F53D}\u{1F550}-\u{1F567}\u{1F5FB}-\u{1F640}\u{1F645}-\u{1F64F}\u{1F680}-\u{1F68A}]/
