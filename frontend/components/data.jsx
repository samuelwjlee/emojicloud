import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {fetchEmojis} from '../utility/d3cloud';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const fieldStyle = {
  fontWeight: 'bold',
  paddingBottom: 30,
}

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
      value: 1,
      value1: 30,
      value2: 10,
      value3: 9,
      emoji1: "/images/emojione/png/1f49c.png?v=2.2.6",
      emoji2: "/images/emojione/png/1f42f.png?v=2.2.6",
      emoji3: "/images/emojione/png/1f41c.png?v=2.2.6"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetchEmojis('world', this);
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return(
      <div>
        <div className="regionControl" style={fieldStyle}>
          <SelectField
            floatingLabelText="Current Region"
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth={true}>

            <MenuItem value={1}
              primaryText="World"
              onClick={() => fetchEmojis('world', this)}/>
            <MenuItem value={2}
              primaryText="Asia"
              onClick={() => fetchEmojis('asia', this)}/>
            <MenuItem value={3}
              primaryText="America"
              onClick={() => fetchEmojis('america', this)}/>
            <MenuItem value={4}
              primaryText="Africa"
              onClick={() => fetchEmojis('africa', this)}/>
            <MenuItem value={5}
              primaryText="Europe"
              onClick={() => fetchEmojis('europe', this)}/>
          </SelectField>
        </div>

        <div className="topEmojis">
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
      </div>
    )
  }
}

export default Data;
