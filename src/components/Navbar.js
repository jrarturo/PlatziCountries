import React from 'react';

import '../styles/Navbar.css';
import logo from '../images/world.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <a className="Navbar__brand" href="/">
            <span className="font-weight-light">Countries</span>
            <span className="font-weight-bold">APP</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
