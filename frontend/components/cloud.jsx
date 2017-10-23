import React from 'react';
import {fetchEmojis} from '../utility/d3cloud';

class Cloud extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    d3.select("#cloud").attr("width", 500).attr("height", 500);
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
