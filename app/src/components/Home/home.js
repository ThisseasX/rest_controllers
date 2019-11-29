import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://thiss-rest-controllers.herokuapp.com/users')
      .then(response => response.json())
      .then(users => setUsers(users));
  }, []);

  return (
    <>
      <h1>Hello!</h1>

      <p>
        <Link to={'/search'}>Click here to search by id.</Link>
      </p>
      <p>
        <Link to={'/insert'}>Click here to insert new user.</Link>
      </p>

      <p>These are the existing users.</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              {Object.entries(user).map(([key, value]) => (
                <td key={key}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
