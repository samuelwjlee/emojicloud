desc "This task is called by the Heroku scheduler add-on"

task :receive_tweets => :environment do
  puts "Receiving tweets from the world..."

  WorldEmoji.create!(emojis: TwitterApi.world2)
  UsEmoji.create!(emojis: TwitterApi.n_america)
  AfricaEmoji.create!(emojis: TwitterApi.africa)
  AsiaEmoji.create!(emojis: TwitterApi.asia)
  EuropeEmoji.create!(emojis: TwitterApi.europe)

  puts "done."
end
