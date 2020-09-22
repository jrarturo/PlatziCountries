import React from 'react';

class CountrySearch extends React.Component {
  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    let searchingFor = this.state.items.filter((items) => {
      return items.name.indexOf(this.state.search) !== -1;
    });

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

export default CountrySearch;
