import React from 'react';

const style = {
  width: '500',
  height: '500',
  borderRadius: 360,
  backgroundColor: 'ghostwhite',
  padding: 30
}

class Cloud extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {return(<svg id="cloud" style={style}></svg>);}
}

export default Cloud;
