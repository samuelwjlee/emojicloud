import React from 'react';
import {fetchEmojis} from '../utility/d3cloud';

const style = {
  width: '500',
  height: '500'
}

class Cloud extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchEmojis('world');
  }

  render() {return(<svg id="cloud" style={style}></svg>);}
}

export default Cloud;
