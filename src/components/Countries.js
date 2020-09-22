import React from 'react';
import PageLoading from './PageLoading';
import '../styles/Countries.css';
import '../styles/App.css';

const allCountriesAPI = 'https://restcountries.eu/rest/v2/all';

class Countries extends React.Component {
  state = {
    items: [],
    loading: true,
    search: '',
  };

  async componentDidMount() {
    const response = await fetch(allCountriesAPI);
    const data = await response.json();
    this.setState({ items: data, loading: false });
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    let searchingFor = this.state.items.filter((items) => {
      return items.name.indexOf(this.state.search) !== -1;
    });

    if (this.state.loading) {
      return <PageLoading />;
    }

    if (!this.state.items) {
      return (
        <div className="App-header">
          <p>Didn't get a Country or Countries</p>
        </div>
      );
    }

    return (
      <div className="container">
        <div>
          <input
            className="form-control"
            placeholder="Search Country"
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>

        <div className="container all-countries">
          {searchingFor.map((item) => {
            return (
              <div className="country" key={item.numericCode}>
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
            );
          })}
        </div>
      </div>
    );
  }
}
export default Countries;
