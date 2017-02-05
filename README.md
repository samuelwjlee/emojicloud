# README
![EmojiCloud-logo]
[EmojiCloud-logo]: https://res.cloudinary.com/dseky3p5e/image/upload/c_scale,h_59/v1486169210/emojicloud_yufjs2.png
[live][EmojiCloud]
[EmojiCloud]: https://emojicloud.herokuapp.com/


#### EmojiCloud
EmojiCloud is a visualization of emojis from tweets posted at a certain time or location. Similar to word cloud, more common emojis will be larger in size. Through this visualization, users will be able to get the general sense of how the public is feeling at a certain time and location.


## Features

![emoji-cloud-screenshot]
[emoji-cloud-screenshot]: ./docs/screenshots/emoji-cloud-screenshot.png

![tweet-sample-screenshot]
[tweet-sample-screenshot]: ./docs/screenshots/tweet-sample-screenshot.png

![map-screenshot]
[map-screenshot]: ./docs/screenshots/map-screenshot.png


## Technologies and Technical Challenges

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

### D3 Cloud Visualization
The cloud visualization was implemented using the d3.js library. One of the issues we had foreseen was d3's incompatibility with React. Both require DOM control and don't play well together. We decided to pivot from a React implementation since it was not necessarily needed for our use case: there weren't many different components to render nor was there a need for Reacts portability. This made implementation of d3 considerable easier and rendering more smooth.

Javascript library, Data-Driven-Documents(D3)

#### Choosing visualization
- considered "word cloud" but unnecessarily complex for round images versus rectangular shaped words
- D3 force node graph

#### Rendering Data
- Use of Logarithmic Scale

#### Collision Detection
- ?
- bounding box

#### Refreshing Nodes
- issues with nodes being removed from the canvas but still creating a legacy force effect (like a black hole). Each subsequent request for emoji data caused the cloud to distort to greater extent. Testing led to using nodes.pop()

## Group Members
EmojiCloud was designed and implemented by Mark Noizumi, Peter Delfausse, and Samuel Lee.

Mark and Sam put together the Rails backend, tamed the Twitter API, and collected emoji data. Peter transformed the data into an emoji cloud on the frontend.
