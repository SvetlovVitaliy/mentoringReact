import React from 'react';

import logo from './logo.svg';
import './app.css';
import Wrapper from '../components/wrapper';

export function App() {
  const element = (<h1>Hello</h1>);
  const world = React.createElement(
    'h1',
    {className: 'world'},
    'world'
  );
  return (
    <div className="App">
      <header className="App-header">
        {element}
        {world}
        <Wrapper />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
