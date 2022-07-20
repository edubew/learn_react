import React, { Component } from 'react';
// eslint-disable-next-line  import/extensions
import Navbar from './components/Navbar';
import Main from './components/Main';

export class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
