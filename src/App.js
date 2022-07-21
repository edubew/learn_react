import React, { Component } from 'react';
// eslint-disable-next-line  import/extensions
import Nav from './components/Nav';

export class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Nav />
      </div>
    );
  }
}

export default App;
