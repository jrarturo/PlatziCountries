import React from 'react';
import { Link } from 'react-router-dom';

import world from '../images/world.png';
import '../styles/App.css';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={world} className="World-logo" alt="logo" />
          <br />
          <p>Welcome to the Countries App</p>
          <Link className="App-link" to="/countries">
            List of Countries
          </Link>
        </header>
      </div>
    );
  }
}

export default Home;
