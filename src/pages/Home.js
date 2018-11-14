import React from 'react';
import PropTypes from 'prop-types';
import withAuth from '../withAuth';

const Home = ({ login }) => (
  <div>
    <div>
      <h3>Home Page</h3>
      <button onClick={login}>Login</button>
    </div>
  </div>
);

Home.propTypes = {
  login: PropTypes.func.isRequired,
};

export default withAuth(Home);
