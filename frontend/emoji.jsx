import React from 'react';
import ReactDOM from 'react-dom';

class Emoji extends React.Component {
  constructor(){
    super();

    this.state = {emojis: {}};
    this.fetchEmojis();
  }

  fetchEmojis() {
      $.ajax({
        method: 'GET',
        url: 'api/emoji'
      }).then((res) => this.setState({emojis: res}));
  }

  render(){

    return (
      <div>
        <h1>Welcome to Emojicloud!</h1>
        <button onClick={this.fetchEmojis}>Render Emojis</button>
        <div>{this.state.emojis}</div>
      </div>
    );
  }
}

export default Emoji;
