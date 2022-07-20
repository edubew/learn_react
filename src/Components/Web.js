import React, { Component } from 'react';

export class Web extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a className="navbar-brand" href="logo.html">logo</a>
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="home.html">Home</a>
            <a className="nav-link" href="home.htm">Features</a>
            <a className="nav-link" href="home.html">Pricing</a>
          </div>
        </nav>
        <h2>ReactFacts</h2>
        <h2>React Course - Project 1</h2>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first realesed in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    );
  }
}

export default Web;
