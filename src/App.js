import React, { Component } from 'react';
// eslint-disable-next-line  import/extensions
import Info from './components/Info';
import About from './components/About';

export class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Info />
        <About />
      </div>
    );
  }
}

export default App;
