import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
