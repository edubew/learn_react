import React, { Component } from 'react';
import edube from '../images/edube.jpg';

export class Info extends Component {
  render() {
    return (
      <div className="info">
        <img src={edube} alt="My profile" />
        <h1>Winfred Edube</h1>
        <h2>FrontEnd Developer</h2>
        <div className="buttons-container">
          <a href="edubew98@gmail.com">Email</a>
          <a href="edubew98@gmail.com">LinkedIn</a>
        </div>
      </div>
    );
  }
}

export default Info;
