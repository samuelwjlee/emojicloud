import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const style = {
  width: '500',
  height: '500',
}

const instStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: 10,
}

const descriptionStyle = {
  margin: 'auto',
  marginLeft: 0,
  marginRight: 0,
}

class Cloud extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
            <FlatButton
              label="Okay"
              primary={true}
              onClick={this.handleClose}
            />,
          ];

    return(
      <div>
        <Dialog
          title="Emojicloud"
          titleStyle={{textAlign: 'center'}}
          contentStyle={{width: 500}}
          actions={actions}
          modal={true}
          open={this.state.open}>
          <div style={instStyle}>
            <img src="./images/emojione/png/1f602.png?v=2.2.6"></img>
            <p style={descriptionStyle}>See popular emojis used around the world!</p>
          </div>
          <div style={instStyle}>
            <img src="./images/emojione/png/1f60d.png?v=2.2.6"></img>
            <p style={descriptionStyle}>Frequently used emojis are rendered larger</p>
          </div>
          <div style={instStyle}>
            <img src="./images/emojione/png/1f4af.png?v=2.2.6"></img>
            <p style={descriptionStyle}>Checkout the percentage of popular emojis</p>
          </div>

        </Dialog>

        <svg id="cloud" style={style}></svg>
      </div>
    )
  }
}

export default Cloud;
