import React from 'react';
import ReactDOM from 'react-dom';
import Emoji from './emoji.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Emoji />, root);
});
