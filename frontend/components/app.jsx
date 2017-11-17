import React from 'react';
import Header from './header';
import Cloud from './cloud';
import Data from './data';

const appStyle ={
  height: '100%'
}

const contentStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: '100%'
}

const cloudContainerStyle = {
  margin: 'auto',
  width: 500,
  marginTop: '9%',
  borderRadius: 360,
  background: 'rgba(255,255,255, 0.3)',
  padding: 30,
}

const controlStyle = {
  margin: 'auto',
  marginLeft: 0,
  marginTop: '13%',
  width: 300,
  background: 'rgba(255,255,255, 0.3)',
  padding: 30,
}

const App = () => (
  <div className="app" style={appStyle}>
    <Header />
    <div className="content" style={contentStyle}>
      <div className="cloudContainer" style={cloudContainerStyle}>
        <Cloud />
      </div>
      <div className="control" style={controlStyle}>
        <Data />
      </div>
    </div>
  </div>
);

export default App;
