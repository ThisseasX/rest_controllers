import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash.isempty';
import { useStyles } from './styles';

const Insert = () => {
  const [state, setState] = useState({
    fields: {},
    user: {},
    error: '',
  });

  const classes = useStyles();

  const handleError = response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  };

  const handleChange = ({ target: { name, value } }) => {
    setState(state => ({
      ...state,
      fields: {
        ...state.fields,
        [name]: value,
      },
    }));
  };

  const handleClick = () => {
    fetch('https://thiss-rest-controllers.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state.fields),
    })
      .then(handleError)
      .then(result => {
        setState(state => ({
          ...state,
          user: result,
        }));
      })
      .catch(() => {
        setState(state => ({
          ...state,
          user: {},
        }));
      });
  };

  return (
    <>
      <p>
        <Link to={'/home'}>&laquo; Back</Link>
      </p>

      <div className={classes.fields}>
        <label htmlFor={'input-id'}>ID:</label>
        <input
          id={'input-id'}
          type={'number'}
          name={'id'}
          autoComplete={'off'}
          onChange={handleChange}
        />

        <label htmlFor={'input-name'}>Name:</label>
        <input
          id={'input-name'}
          name={'name'}
          autoComplete={'off'}
          onChange={handleChange}
        />

        <label htmlFor={'input-surname'}>Surname:</label>
        <input
          id={'input-surname'}
          name={'surname'}
          autoComplete={'off'}
          onChange={handleChange}
        />

        <button id={'btn-insert'} onClick={handleClick}>
          Insert
        </button>
      </div>

      {isEmpty(state.user) ? (
        <h3>Insert New User</h3>
      ) : !state.user.id ? (
        <h3>Failed to insert user</h3>
      ) : (
        <div>
          <h3>Successfully added:</h3>
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
                {Object.entries(state.user).map(([key, value]) => (
                  <td key={key}>{value}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Insert;
