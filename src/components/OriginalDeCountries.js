import React from 'react';
//import Navbar from './Navbar';
//import { ListCountries } from './ListCountries';
//import { Details } from './Details';
import '../styles/Countries.css';
//import header from '../images/countries-logo.svg';

const allCountriesAPI = 'https://restcountries.eu/rest/v2/all';

class CountryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(allCountriesAPI)
      .then((result) => result.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          {items.map((otro) => (
            <tr key={otro.flag}>
              <a href="www.platzi.com">
                <td className="c1">
                  <img src={otro.flag} width="45px" alt={otro.name} />
                </td>
              </a>
              <td>{otro.name}</td>
            </tr>
          ))}
        </div>
      );
    }
  }
}

export default CountryClass;

import React from 'react';
import { useState, useEffect } from 'react';

import '../styles/Countries.css';

import CountryClass from './OriginalDeCountries';

//import Navbar from './Navbar';
//import { ListCountries } from './ListCountries';
//import { Details } from './Details';

//import header from '../images/countries-logo.svg';

const allCountriesAPI = 'https://restcountries.eu/rest/v2/all';

function Countries(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(allCountriesAPI)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        {items.map((item) => (
          <tr key={item.flag}>
            <a href="www.platzi.com">
              <td className="c1">
                <img src={item.flag} width="45px" alt={item.name} />
              </td>
            </a>
            <td>{item.name}</td>
          </tr>
        ))}
        {this.state.isLoaded && (
          <div className="loader">
            <CountryClass />
          </div>
        )}
      </div>
    );
  }
}

export default Countries;
