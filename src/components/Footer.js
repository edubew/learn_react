import React, { Component } from 'react';
import github from '../images/github-icon.png';
import twitter from '../images/twitter-icon.png';
import linkedin from '../images/linkedin-icon.png';
import pinterest from '../images/pinterest-icon.png';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="github.com"><img src={github} alt="github" /></a>
        <a href="twitter.com"><img src={twitter} alt="twitter" /></a>
        <a href="linkedin.com"><img src={linkedin} alt="linkedin" /></a>
        <a href="pinterest.com"><img src={pinterest} alt="pinterest" /></a>
      </footer>
    );
  }
}

export default Footer;
