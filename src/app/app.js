import React from 'react';

import logo from './logo.svg';
import './app.css';
import Wrapper from '../components/wrapper';
import { World, Element } from '../components/world';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Element}
        {World}
        <Wrapper />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
