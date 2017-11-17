import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './app';
import {blue800} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue800,
  }
})

const Root = () => {
  return(
    <MuiThemeProvider muiTheme={muiTheme}><App /></MuiThemeProvider>
  )
}

export default Root;
