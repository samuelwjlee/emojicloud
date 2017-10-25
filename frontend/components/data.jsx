import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

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
  render() {
    return(
      <div>
        <h3>Most Popular Emojis</h3>
        <div className="emojistat" style={emojistatStyle}>
          <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7" />
          <LinearProgress mode="determinate" value={30} style={progressStyle}/>
          <p className="percentage" style={percentageStyle}>30%</p>
        </div>
        <div className="emojistat" style={emojistatStyle}>
          <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7" />
          <LinearProgress mode="determinate" value={10} style={progressStyle}/>
          <p className="percentage" style={percentageStyle}>10%</p>
        </div>
        <div className="emojistat" style={emojistatStyle}>
          <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7" />
          <LinearProgress mode="determinate" value={5} style={progressStyle}/>
          <p className="percentage" style={percentageStyle}>5%</p>
        </div>
      </div>
    )
  }
}

export default Data;
