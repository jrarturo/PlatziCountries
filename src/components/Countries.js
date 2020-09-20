import React from 'react';
//import Navbar from './Navbar';
//import { ListCountries } from './ListCountries';
//import { Details } from './Details';
import '../styles/Countries.css';
//import header from '../images/countries-logo.svg';

import { Link } from 'react-router-dom';

const allCountriesAPI = 'https://restcountries.eu/rest/v2/all';

class CountryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      search: '',
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

  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0, 20) });
  }

  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
          {items.map((item) => (
            <tr key={item.flag}>
              <td>{item.name}</td>
              <Link to="www.platzi.com">
                <td className="c1">
                  <img src={item.flag} width="45px" alt={item.name} />
                </td>
              </Link>
            </tr>
          ))}
        </div>
      );
    }
  }
}

export default CountryClass;
