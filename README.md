![EmojiCloud-logo]
[EmojiCloud-logo]: ./docs/screenshots/emoji-cloud-logo.png
[live link][EmojiCloud]
[EmojiCloud]: https://emojicloud.herokuapp.com/


## EmojiCloud
EmojiCloud is a data visualization of emoji usage from around the world. We utilize the Twitter API to collect tweets, analyze the emoji usage trends, and present the data in an friendly cloud format. Similar to a word cloud, more common emojis are depicted larger in size.


## Features
#### The Emoji Cloud
A visual representation of emojis used in tweets. The emoji "cloud" displays the relative frequency of each type of emoji, in logarithmic scale.

![emoji-cloud-screenshot]
[emoji-cloud-screenshot]: ./docs/screenshots/cloud-screenshot.png

#### Tweet Sample
When you hover over an emoji in the cloud a sample tweet appears...

![tweet-sample-screenshot]
[tweet-sample-screenshot]: ./docs/screenshots/tweet-screenshot.png


#### Map Pin
Clicking an emoji shows a marker on the map, pinpointing the location of the tweet.

![map-screenshot]
[map-screenshot]: ./docs/screenshots/map-screenshot.png


## Technologies and Challenges

### Rails and the Twitter API
EmojiCloud was built with a Rails backend to implement the Twitter API.

#### Twitter Streaming API
The Twitter Stream is the raw stream of all current tweets.  Data flows out of it in real time from Twitter.  We utilize this stream for our data.  World tweets are taken directly from the open stream, while continent specific tweets are obtained by filtering the stream for a specific geographic location.  This location is created by giving coordinates that create a square by giving the lower and upper bounds for two corners.  

![code1-screenshot]
[code1-screenshot]: ./docs/screenshots/countries.png

#### Data Sets
Each emojicloud is rendered based on results from a sample stream of 1000 tweets. We found that number returned about 200 tweets with emojis, giving a better range of emojis in the sample.  Overall, in our limited datasets we found that emoji usage hovers around 20% in our overall tweets.  Interestingly, we noticed in our samples from Africa that emojis utilization is much higher, appearing in roughly 30% of tweets.  

![code2-screenshot]
[code2-screenshot]: ./docs/screenshots/twitter_search.png

#### Parsing Data
We parsed the emoji data using a regular expression that filters out tweets.  We then tabulate the frequency of the emojis by storing frequencies in a hash along with sample tweet data for that particular emoji.  We were surprised to find that the most commonly used emoji seems to be the tears of joy emoji.  It is represented in almost every dataset we receive.  

![code3-screenshot]
[code3-screenshot]: ./docs/screenshots/sort.png

#### API bottleneck
Initially we planned on doing requests on the spot when a link was clicked.  We soon learned that to collect enough tweets, takes far too long to be responsive to user requests.  Thus, we created tasks in our application manager, Heroku, to retrieve the data on an hourly basis.  

### Cloud Visualization using Data-Driven-Documents(D3)
The emoji cloud visualization was implemented using the force graph from the d3.js library. In the force graph each emoji is represented by a node with its own attraction and repulsion forces. The node forces allow the emojis to space evenly and form an attractive cloud pattern. The nodes can be dragged to any point on the canvas and positions are recalculated on every "tick" (approximately 60 times a second).

Emojis were utilized because we felt that it would be visually appealing as well as provide an interesting data analysis.  

#### Handling the Data
During the planning stages we were unaware of the popularity of some emojis. In fact, in any given sample we gathered, the most popular emoji was up to 20 times more frequent than the median. In order to make the cloud visually appealing we wanted to maximize the size of the emojis and represent popularity in scale. We were able to accomplish this using a roughly logarithmic scale: an emoji that is ten times as popular is roughly double the size and one that is one hundred times more popular is roughly triple the size.

#### Collision Detection
We were able to implement a simple collision detection with a bounding box which prevents the emoji nodes from flying off the canvas. Ensuring that the nodes don't overlap each other was a more difficult task. An approximation of node collision bounding was achieved by increasing each node's repulsion charge. Going forward we'd like to implement a more robust collision detection to prevent overlap.

### The EmojiCloud Team
EmojiCloud was designed and implemented by Mark Noizumi, Peter Delfausse, and Samuel Lee.

Mark and Sam put together the Rails backend, tamed the Twitter API, and formatted the data. Peter transformed the data into an emoji cloud on the frontend.
