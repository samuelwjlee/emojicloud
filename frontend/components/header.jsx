import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.Component {
  render() {
    return (
      <AppBar
        title="Emojicloud"
        titleStyle={{textAlign: 'center'}}
        iconElementLeft={<div></div>}
        iconElementRight={<FlatButton label="Info" />}
      />
    )
  }
}

export default Header;
