import React from 'react';
import PropTypes from 'prop-types';
import withAuth from '../withAuth';

const Home = ({ login, isLoggedIn }) => (
  <div>
    <div>
      <h3>Home Page</h3>
      <button onClick={login}>Login</button>
      <h2>Welcome to Coligo <small>({isLoggedIn ? 'Logged In' : 'Logged Out'})</small></h2>
    </div>
  </div>
);

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

export default withAuth(Home);
