desc "This task is called by the Heroku scheduler add-on"

task :receive_tweets => :environment do
  puts "Receiving tweets from the world..."
  WorldEmoji.create!(emojis: TwitterApi.world2)
  puts "Receiving tweets from the USA..."
  UsEmoji.create!(emojis: TwitterApi.n_america)
  puts "Receiving tweets from Africa..."
  AfricaEmoji.create!(emojis: TwitterApi.africa)
  puts "Receiving tweets from Asia..."
  AsiaEmoji.create!(emojis: TwitterApi.asia)
  puts "Receiving tweets from Europe..."
  EuropeEmoji.create!(emojis: TwitterApi.europe)
  puts "done."
end
