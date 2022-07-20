import React, { Component } from 'react';
import edube from './images/edube.jpg';

export class Info extends Component {
  render() {
    return (
      <div>
        <img src={edube} alt="My profile" />
      </div>
    );
  }
}

export default Info;
