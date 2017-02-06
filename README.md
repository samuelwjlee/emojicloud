![EmojiCloud-logo]
[EmojiCloud-logo]: ./docs/screenshots/emoji-cloud-logo.png
[live][EmojiCloud]
[EmojiCloud]: https://emojicloud.herokuapp.com/


## EmojiCloud
EmojiCloud is a data visualization of emoji usage from around the world. We utilize the Twitter API to collect tweets, analyze the emoji usage trends, and present the data in an friendly cloud format. Similar to a word cloud, more common emojis are depicted larger in size.


## Features
#### The Emoji Cloud
A visual representation of emojis used in tweets. The emoji "cloud" displays the relative frequency of each type of emoji, in logarithmic scale.

![emoji-cloud-screenshot]
[emoji-cloud-screenshot]: ./docs/screenshots/cloud-screenshot.png

#### Tweet Sample
When you click on an emoji in the cloud a sample tweet pops up...

![tweet-sample-screenshot]
[tweet-sample-screenshot]: ./docs/screenshots/tweet-screenshot.png


#### Map Pin
As does a marker on the map, pinpointing the location of the tweet.

![map-screenshot]
[map-screenshot]: ./docs/screenshots/map-screenshot.png


## Technologies and Challenges

### Rails and the Twitter API
EmojiCloud was built with a Rails backend to implement the Twitter API.

#### Twitter Search API vs Streaming API
- ?

#### Data Sets
- Getting a dataset large enough to create an emoji cloud (number of tweets containing emojis limiting factor)

#### Parsing Data
- Pulling out emojis
- ??

#### API bottleneck
- increased responsiveness by making two API requests (static and streaming)

### Cloud Visualization using Data-Driven-Documents(D3)
The emoji cloud visualization was implemented using the force graph from the d3.js library. In the force graph each emoji is represented by a node with its own attraction and repulsion forces. The node forces allow the emojis to space evenly and form an attractive cloud pattern. The nodes can be dragged to any point on the canvas and positions are recalculated on every "tick" (approximately 60 times a second).

One of the issues we had foreseen during the planning phase of the project were the compatibility issues between D3 and React, as both both require control of the DOM. We decided to pivot from using React since it was not necessary for our use case: there wouldn't be many different components to render nor was there a need for Reacts portability. This made implementation of D3 considerably easier and the re-rendering of the nodes more fluid.

One of the D3 visualizations we had considered was a "word cloud" but it was found to be unnecessarily complex. Whereas a word cloud has to account for rectangular objects, an emoji cloud would consist of mostly square or round objects.

#### Handling the Data
During the planning stages we were unaware of the popularity of some emojis. In fact, in any given sample we gathered, the most popular emoji was up to 20 times more frequent than the median. In order to make the cloud visually appealing we wanted to maximize the size of the emojis and represent popularity in scale. We were able to accomplish this using a roughly logarithmic scale: an emoji that is ten times as popular is roughly double the size and one that is one hundred times more popular is roughly triple the size. 

#### Collision Detection
We were able to implement a simple collision detection with a bounding box which prevents the emoji nodes from flying off the canvas. Ensuring that the nodes don't overlap each other was a more difficult task. An approximation of node collision bounding was achieved by increasing each node's repulsion charge. Going forward we'd like to implement a more robust collision detection to prevent overlap.

### The EmojiCloud Team
EmojiCloud was designed and implemented by Mark Noizumi, Peter Delfausse, and Samuel Lee.

Mark and Sam put together the Rails backend, tamed the Twitter API, and formatted the data. Peter transformed the data into an emoji cloud on the frontend.
