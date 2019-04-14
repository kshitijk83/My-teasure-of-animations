import React, { Component } from 'react';
import './App.css';

import MouseTrail from './animations/mouseTrail/mouseTrail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MouseTrail />
      </div>
    );
  }
}

export default App;
