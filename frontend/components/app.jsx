import React from 'react';
import Header from './header';
import Cloud from './cloud';
import Region from './region';
import Data from './data';

const appStyle ={
  height: '100%'
}

const contentStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  height: '100%'
}

const cloudContainerStyle = {
  margin: 'auto',
  width: 500
}

const controlStyle = {
  margin: 'auto',
  width: 300
}

const App = () => (
  <div className="app" style={appStyle}>
    <Header />
    <div className="content" style={contentStyle}>
      <div className="cloudContainer" style={cloudContainerStyle}>
        <Cloud />
      </div>
      <div className="control" style={controlStyle}>
        <Region />
        <Data />
      </div>
    </div>
  </div>
);

export default App;
