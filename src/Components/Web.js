import React, { Component } from 'react';

export class Web extends Component {
  render() {
    return (
<nav className="navbar">
    <a className="navbar-brand" href="#">logo</a>
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
      </div>
</nav>
    );
  }
}

export default Web;
