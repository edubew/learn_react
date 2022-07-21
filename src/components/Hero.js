import React, { Component } from 'react';
import grid from '../images/grid.png';

export class Hero extends Component {
  render() {
    return (
      <section>
        <div className="hero-container">
          <img src={grid} alt="grid" />
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </section>
    );
  }
}

export default Hero;
