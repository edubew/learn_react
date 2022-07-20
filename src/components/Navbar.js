import React, { Component } from 'react';
import reactLogo from '../images/reactLogo.png';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="logo.html"><img src={reactLogo} alt="React Logo" className="logo" /></a>
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="home.html">Home</a>
          <a className="nav-link" href="home.htm">Features</a>
          <a className="nav-link" href="home.html">Pricing</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
