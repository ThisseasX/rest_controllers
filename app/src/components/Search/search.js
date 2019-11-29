import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash.isempty';

const Search = () => {
  const [user, setUser] = useState({});

  const handleChange = ({ target: { value } }) => {
    value
      ? fetch(`https://thiss-rest-controllers.herokuapp.com/users/${value}`)
          .then(response => response.json())
          .then(user => setUser(user))
      : setUser({});
  };

  return (
    <>
      <p>
        <Link to={'/home'}>&laquo; Back</Link>
      </p>

      <label htmlFor={'search-user'}>ID:</label>
      <input
        id={'search-user'}
        type={'number'}
        onChange={handleChange}
      />
      {isEmpty(user) ? (
        <h3>Type to search</h3>
      ) : !user.id ? (
        <h3>No User Found</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.entries(user).map(([key, value]) => (
                <td key={key}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default Search;
