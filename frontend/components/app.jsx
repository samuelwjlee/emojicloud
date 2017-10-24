import React from 'react';
import Cloud from './cloud';
import Region from './region';

const style = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row'
}

const App = () => (
  <div className="app" style={style}>
    <Cloud />
    <div className="control">
      <Region />
    </div>
  </div>
);

export default App;
