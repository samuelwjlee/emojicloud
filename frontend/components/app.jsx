import React from 'react';

const App = () => (
  <div>
    <h1>Emojicloud</h1>
    <svg id="cloud"></svg>
    <div id="emoji-controls">
      <button className="emoji-controls-btn" onClick={() => fetchEmojis('world')}>World</button>
      <button className="emoji-controls-btn" onClick={() => fetchEmojis('africa')}>Africa</button>
      <button className="emoji-controls-btn" onClick={() => fetchEmojis('asia')}>Asia</button>
      <button className="emoji-controls-btn" onClick={() => fetchEmojis('europe')}>Europe</button>
      <button className="emoji-controls-btn" onClick={() => fetchEmojis('us')}>N.America</button>
    </div>
  </div>
);

export default App;
