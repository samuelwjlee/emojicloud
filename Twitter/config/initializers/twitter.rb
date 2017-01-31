require 'twitter'

$twitter = Twitter::REST::Client.new do |config|
  config.consumer_key = ENV['CONSUMER_KEY']
  config.consumer_secret = ENV['CONSUMER_SECRET']
  config.access_token = ENV['YOUR_ACCESS_TOKEN']
  config.access_token_secret = ENV['YOUR_ACCESS_SECRET']
end




client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "FrYhXypqYZdMJ3AnHTrOovbHj"
  config.consumer_secret     = "eUWDnrUHcauyVY6ihoZa59a9FkxLA02cRIAWb3pjROttv6F5SN"
  config.access_token        = "1943009184-c5mEpzdJ3cXbIGaaDNmtCJPme7i2YqGs4thKvRg"
  config.access_token_secret = "ftg9as8x7CA8H6uPTgeChNDtzSlbyQSJ6RGDVFj2EQZSz"
end
