import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {getEmojis} from '../utility/d3cloud';

const emojistatStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  paddingBottom: 15,
}

const progressStyle = {
  height: 30,
  width: 150,
  margin: 'auto',
  marginRight: 0,
  marginLeft: 0,
  paddingLeft: 20,
  backgroundColor: 'white'
}

const percentageStyle = {
  margin: 'auto'
}

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: 0,
      value2: 0,
      value3: 0,
      emoji1: "https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7",
      emoji2: "https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7",
      emoji3: "https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7"
    }
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <div>
        <h3 style={{textAlign: 'center'}}>Most Popular Emojis</h3>
        <div className="emojistat" style={emojistatStyle}>
          <img src={this.state.emoji1} />
          <LinearProgress mode="determinate" value={this.state.value1} style={progressStyle}/>
          <p className="percentage" style={percentageStyle}>{this.state.value1}%</p>
        </div>
        <div className="emojistat" style={emojistatStyle}>
          <img src={this.state.emoji2} />
          <LinearProgress mode="determinate" value={this.state.value2} style={progressStyle}/>
          <p className="percentage" style={percentageStyle}>{this.state.value2}%</p>
        </div>
        <div className="emojistat" style={emojistatStyle}>
          <img src={this.state.emoji3} />
          <LinearProgress mode="determinate" value={this.state.value3} style={progressStyle}/>
          <p className="percentage" style={percentageStyle}>{this.state.value3}%</p>
        </div>
      </div>
    )
  }
}

export default Data;
