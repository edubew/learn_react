import React, { Component } from 'react';
// eslint-disable-next-line  import/extensions
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    );
  }
}

export default App;
