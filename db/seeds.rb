# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

WorldEmoji.create!(emojis: TwitterApi.world_tweets)
UsEmoji.create!(emojis: TwitterApi.us_tweets)
AfricaEmoji.create!(emojis: TwitterApi.africa_tweets)
AsiaEmoji.create!(emojis: TwitterApi.asia_tweets)
EuropeEmoji.create!(emojis: TwitterApi.europe_tweets)
