import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const emojistatStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  paddingBottom: 15,
}

const progressStyle = {
  height: 30,
  width: 200,
  margin: 'auto',
  backgroundColor: 'white'
}

class Data extends React.Component {
  render() {
    return(
      <div>
        <h3>Most Popular Emojis</h3>
        <div className="emojistat" style={emojistatStyle}>
          <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7" />
          <LinearProgress mode="determinate" value={30} style={progressStyle}/>
        </div>
        <div className="emojistat" style={emojistatStyle}>
          <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7" />
          <LinearProgress mode="determinate" value={10} style={progressStyle}/>
        </div>
        <div className="emojistat" style={emojistatStyle}>
          <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f611.png?v=2.2.7" />
          <LinearProgress mode="determinate" value={5} style={progressStyle}/>
        </div>
      </div>
    )
  }
}

export default Data;
