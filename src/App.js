import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper.jsx';

function App() {
  const element = (<h1>Hello</h1>);
  return (
    <div className="App">
      <header className="App-header">
        {element}
        <Wrapper />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
