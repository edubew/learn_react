import React, { Component } from 'react';
import airbnbLogo from '../images/airbnbLogo.png';

export class Nav extends Component {
  render() {
    return (
      <nav>
        <img src={airbnbLogo} alt="airbnb logo" />
      </nav>
    );
  }
}

export default Nav;
