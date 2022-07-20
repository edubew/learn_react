import React, { Component } from 'react';
// eslint-disable-next-line  import/extensions
import Info from './components/Info';

export class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Info />
      </div>
    );
  }
}

export default App;
