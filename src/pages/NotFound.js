import React from 'react';
import { Link } from 'react-router-dom';
import world from '../images/countriesOnFire.png';
import emoji from '../images/emoji.png';
import '../styles/App.css';

const NotFound = () => (
  <div className="App">
    <br />
    <img src={world} className="World-logo" alt="logo" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>
      <img src={emoji} alt="emoji" /> Not found 404
    </p>
    <div className="container">
      <div></div>
    </div>
    <div className="App-div-links">
      <Link className="App-link" to="/">
        Get back Home
      </Link>
    </div>
  </div>
);

export default NotFound;
