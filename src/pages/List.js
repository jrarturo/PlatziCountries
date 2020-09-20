import React from 'react';

const List = ({ data }) => {
  const showList = () => {
    return data.map((country, index) => {
      return (
        <tr key={index}>
          <td className="c1">
            <img src={country.flag} width="65px" alt={country.name} />
          </td>
          <td>{country.name}</td>
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
        <tbody id="root">{showList()}</tbody>
      </table>
    </div>
  );
};

export default List;
