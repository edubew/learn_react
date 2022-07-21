import React, { Component } from 'react';
// eslint-disable-next-line  import/extensions
import Nav from './components/Nav';
import Hero from './components/Hero';

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default App;
