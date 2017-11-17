import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const titleStyle = {
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
}

class Header extends React.Component {
  render() {
    return (
      <AppBar
        title="Emojicloud"
        titleStyle={titleStyle}
        style={{backgroundColor: 'rgba(255,255,255, 0.8)'}}
        showMenuIconButton={false}
      />
    )
  }
}

export default Header;
