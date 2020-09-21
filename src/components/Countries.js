import React from 'react';

import '../styles/Countries.css';
import '../styles/App.css';

const allCountriesAPI = 'https://restcountries.eu/rest/v2/all';

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      search: '',
    };
    this.searchHandler = this.searchHandler.bind(this);
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

  searchHandler(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <input
            className="searchbar"
            placeholder="Search Country"
            type="text"
            value={this.state.search}
            onChange={this.searchHandler}
          />

          <div className="container all-countries">
            {items.map((item) => (
              <div>
                <tr key={item.flag}>
                  <td className="c1">
                    <img
                      className="country-flag"
                      src={item.flag}
                      width="45px"
                      alt={item.name}
                    />
                  </td>
                </tr>
                <td className="country-info">{item.name}</td>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Countries;
