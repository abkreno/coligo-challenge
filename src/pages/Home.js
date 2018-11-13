import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ onLoginClick }) => (
  <div>
    <div>
      <h3>Home Page</h3>
      <button onClick={onLoginClick}>Login</button>
    </div>
  </div>
);

Home.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default Home;
