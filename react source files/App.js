import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // creating class called app
  render() {
      //render fun what we want to see
    return (
      <div className="App">
      {/*class in react is className. specify different. id is fine. "just class"*/}
      {/* in react you need to close hr tag check line 16 , input tag need to be cloased as well*/}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <hr/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
