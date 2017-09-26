![EmojiCloud-logo]

[EmojiCloud-logo]:./doc/screenshots/emoji-cloud-logo.png

EmojiCloud is a data visualization of emoji usage from around the world. We utilize the Twitter API to collect tweets, analyze the emoji usage trends, and present the data in a friendly cloud format. Similar to a word cloud, more common emojis are depicted larger in size.

- [LIVE DEMO][EmojiCloud]

[EmojiCloud]:https://emojicloud.herokuapp.com/

## Technologies

### Twitter API, Data-Driven-Documents(D3), and Google Maps API
EmojiCloud was built with Ruby on Rails for backend and Javascript for frontend. Twitter API was used to collect and save tweets to Postgresql database. D3 was used to render emojis and Google Maps API was used to locate where the source of tweets.

#### Twitter Streaming API
Twitter provides two different APIs to access tweet information. The REST API uses secure tokens obtained via OAuth to make requests for tweets data, with a number of different filter options (location, time, etc). The Twitter Streaming API gives access tweets in real time but is limited in its filtering capabilities.  We utilize this stream for our data.  World tweets are taken directly from the open stream, while continent specific tweets are obtained by filtering the stream for a specific geographic location.  This location is created by giving coordinates that create a square by giving the lower and upper bounds for two corners.

```javascript
EUROPE = '-46.230469, 35.666222, 73.300781, 75.906829'
N_AMERICA = '-165.058594, 18.552532, -58.535156, 72.151523'
AFRICA = '-22.675781, -38.899583, 52.910156, 35.092945'
ASIA = '60.996094, -49.217597, 171.386719, 48.392738'
```

#### Data Sets
Each emojicloud is rendered based on results from a sample stream of 1000 tweets. We found that number returned about 200 tweets with emojis, giving a better range of emojis in the sample.  Overall, in our limited datasets we found that emoji usage hovers around 20% in our overall tweets.  Interestingly, we noticed in our samples from Africa that emojis utilization is much higher, appearing in roughly 30% of tweets.  


```javascript
def self.data(region)
  tweets = []
  client.filter(locations: region) do |tweet|
    tweets << tweet
    return tweets if tweets.count > 500
  end
end
```

The data returned from the Streaming API is in JSON format. A limiting factor in creating a large enough data set to be statistically significant was the infrequency of emoji usage in tweets. For example, in order to collect a set of 300 emojis used in tweets, the stream might have to be open 5-10 seconds. For our front end user, waiting this long for the emoji cloud to refresh would be unacceptable. To solve this we increased responsiveness by...


#### Parsing Data
We parsed the emoji data using a regular expression that filters out tweets.  We then tabulate the frequency of the emojis by storing frequencies in a hash along with sample tweet data for that particular emoji.  We were surprised to find that the most commonly used emoji seems to be the tears of joy emoji.  It is represented in almost every dataset we receive.  

```javascript
def self.sort(arr)
  coordinates = []
  word_cloud = {}
  count = 0;

  arr.each do |tweet|Â
    coordinates << tweet.attrs[:coordinates][:coordinates] if tweet.attrs[:coordinates]
    tweet2 = (EMOJI_REGEX.match(tweet.text)).to_s

    ...
  end
end
```

#### API bottleneck
Initially we planned on doing requests on the spot when a link was clicked.  We soon learned that to collect enough tweets, takes far too long to be responsive to user requests.  Thus, we created tasks in our application manager, Heroku, to retrieve the data on an hourly basis.  

### Cloud Visualization using Data-Driven-Documents(D3)
The emoji cloud visualization was implemented using the force graph from the d3.js library. In the force graph each emoji is represented by a node with its own attraction and repulsion forces. The node forces allow the emojis to space evenly and form an attractive cloud pattern. The nodes can be dragged to any point on the canvas and positions are recalculated on every "tick" (approximately 60 times a second).

Emojis were utilized because we felt that it would be visually appealing as well as provide an interesting data analysis.  

#### Handling the Data
During the planning stages we were unaware of the popularity of some emojis. In fact, in any given sample we gathered, the most popular emoji was up to 20 times more frequent than the median. In order to make the cloud visually appealing we wanted to maximize the size of the emojis and represent popularity in scale. We were able to accomplish this using a roughly logarithmic scale: an emoji that is ten times as popular is roughly double the size and one that is one hundred times more popular is roughly triple the size.

#### Collision Detection
We were able to implement a simple collision detection with a bounding box which prevents the emoji nodes from flying off the canvas. Ensuring that the nodes don't overlap each other was a more difficult task. An approximation of node collision bounding was achieved by increasing each node's repulsion charge. Going forward we'd like to implement a more robust collision detection to prevent overlap.

### Google Maps API
Map is initialized and focused on a corresponding continent.
```javascript
function initMap(geo, zoom = 2) {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoom,
    center: geo
  });
}
```
Map drops a pin to locate where the tweet is coming from
```javascript
function placeMark(geo) {
  marker = new google.maps.Marker({
    position: geo,
    map: map,
    animation: google.maps.Animation.DROP
  });
}
```

## Features
#### The Emoji Cloud
A visual representation of emojis used in tweets. The emoji "cloud" displays the relative frequency of each type of emoji, in logarithmic scale.

![emoji-cloud-screenshot]

[emoji-cloud-screenshot]:./doc/screenshots/cloud-screenshot.png

#### Tweet Sample
When you hover over an emoji in the cloud a sample tweet appears...

![tweet-sample-screenshot]

[tweet-sample-screenshot]:./doc/screenshots/tweet-screenshot.png


#### Map Pin
Clicking an emoji shows a marker on the map, pinpointing the location of the tweet.

![map-screenshot]

[map-screenshot]:./doc/screenshots/map-screenshot.png

## The EmojiCloud Team
EmojiCloud was designed and implemented by Mark Noizumi, Peter Delfausse, and Samuel Lee.

Mark and Sam put together the Rails backend, tamed the Twitter API, and formatted the data. Peter transformed the data into an emoji cloud on the frontend.

Samuel's Portfolio: http://www.theleesamuel.com

Mark's Portfolio: http://www.marknoizumi.com/

Peter's Portfolio: https://delisauce.github.io/
