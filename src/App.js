import React, { Component } from 'react';
import './App.scss';
import Hello from './components/Hello';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hello />
        <AboutMe />
      </div>
    );
  }
}
export default App;
