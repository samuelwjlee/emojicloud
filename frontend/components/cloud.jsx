import React from 'react';
import {fetchEmojis} from '../utility/d3cloud';

class Cloud extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchEmojis('world')
  }

  render() {
    return(
      <div>
        <h1>Emojicloud</h1>
        <svg id="cloud"></svg>
      </div>
    )
  }
}

export default Cloud;
