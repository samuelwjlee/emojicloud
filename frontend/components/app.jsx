import React from 'react';
import Header from './header';
import Cloud from './cloud';
import Region from './region';

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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const controlStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
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
      </div>
    </div>
  </div>
);

export default App;
