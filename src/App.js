import React, { Component } from 'react';
import './App.scss';
import Hello from './components/Hello';
import AboutMe from './components/AboutMe';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hello />
        <AboutMe />
        <Education />
      </div>
    );
  }
}
export default App;
