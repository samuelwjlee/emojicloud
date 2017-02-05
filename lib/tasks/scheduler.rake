desc "This task is called by the Heroku scheduler add-on"

task :receive_tweets => :environment do
  puts "Receiving tweets from the world..."

  WorldEmoji.create!(emojis: TwitterApi.world_tweets)
  UsEmoji.create!(emojis: TwitterApi.us_tweets)
  AfricaEmoji.create!(emojis: TwitterApi.africa_tweets)
  AsiaEmoji.create!(emojis: TwitterApi.asia_tweets)
  EuropeEmoji.create!(emojis: TwitterApi.europe_tweets)
  
  puts "done."
end
