import React from 'react';
import Cloud from './cloud';
import Region from './region';

const appStyle = {
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
    <div className="cloudContainer" style={cloudContainerStyle}>
      <Cloud />
    </div>
    <div className="control" style={controlStyle}>
      <Region />
    </div>
  </div>
);

export default App;
