import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ data }) => {
  const showList = () => {
    return data.map((country, index) => {
      return (
        <tr key={index}>
          <td className="c1">
            <img src={country.flag} width="65px" alt={country.name} />
          </td>
          <td>
            <Link
              to={`/countries/${country.name.charAt(0)}/${country.alpha2Code}`}
            >
              {country.name}
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="ctr-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody id="hier">{showList()}</tbody>
      </table>
    </div>
  );
};

export default Details;
