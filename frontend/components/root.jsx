import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './app';

const muiTheme = getMuiTheme({
  palette: {
      primary1Color: '#000000',
      primary2Color: '#000000',
      accent1Color: '#000000',
  }
})
s
const Root = () => {
  return(
    <MuiThemeProvider muiTheme={muiTheme}><App /></MuiThemeProvider>
  )
}

export default Root;
