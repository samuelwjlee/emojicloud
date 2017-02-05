# README
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

![tweet-sample-screenshot]
[tweet-sample-screenshot]: ./docs/screenshots/tweet-screenshot.png


#### Map Pin
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
The cloud visualization was implemented using the d3.js library. One of the issues we had foreseen was d3's incompatibility with React. Both require DOM control and don't play well together. We decided to pivot from a React implementation since it was not necessarily needed for our use case: there weren't many different components to render nor was there a need for Reacts portability. This made implementation of d3 considerably easier and rendering more smooth.

- Benefits of D3
  - nodes updating on "tick"
- Negatives of D3
  - interaction with React

Javascript library,

#### Choosing visualization
- considered "word cloud" but unnecessarily complex for round images versus rectangular shaped words
- D3 force node graph

#### Rendering Data
- In order to make the cloud visually appealing we had to create an algorithm to maximize the size of the emojis while...
- Before we set out on this project we were unaware of the popularity of some emojis. In fact, in any given sample we used the most popular emoji was 10 times larger than ....
- Use of Logarithmic Scale

#### Collision Detection
- ?
- bounding box

#### Refreshing Nodes
- issues with nodes being removed from the canvas but still creating a legacy force effect (like a black hole). Each subsequent request for emoji data caused the cloud to distort to greater extent. Testing led to using nodes.pop()

### The EmojiCloud Team
EmojiCloud was designed and implemented by Mark Noizumi, Peter Delfausse, and Samuel Lee.

Mark and Sam put together the Rails backend, tamed the Twitter API, and formatted the data. Peter transformed the data into an emoji cloud on the frontend.
