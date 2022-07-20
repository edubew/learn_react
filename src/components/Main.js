import React, { Component } from 'react';

export class Main extends Component {
  render() {
    return (
      <main>
        <div className="heading">
          <h2>ReactFacts</h2>
          <h2>React Course - Project 1</h2>
        </div>
        <div className="main-body">
          <h1>Fun facts about React</h1>
          <ul className="facts">
            <li>Was first realeased in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprice apps, including mobile apps</li>
          </ul>
        </div>

      </main>
    );
  }
}

export default Main;
