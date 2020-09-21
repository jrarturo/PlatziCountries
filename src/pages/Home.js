import React from 'react';
import { Link } from 'react-router-dom';

import world from '../images/world.svg';
import '../styles/App.css';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br />
          <img src={world} className="World-logo" alt="logo" />
          <br />
          <p>Welcome to the Countries App</p>
          <div className="container">
            <div></div>
            <div></div>
          </div>
          <div className="App-div-links">
            <Link className="App-link" to="/countries">
              List of Countries
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
