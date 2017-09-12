import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './frontend/calculator';

const App = () => (
  <h1>Hello, calc!!!</h1>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Calculator />, root);
})
