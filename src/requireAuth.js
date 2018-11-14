import React from 'react';
import PropTypes from 'prop-types';
import Home from './pages/Home';
import connectAuth from './connectAuth';

export const requireAuth = (component) => {
  const AuthComponent = (props) => {
    const {
      isLoggedIn,
    } = props;
    if (isLoggedIn) {
      return component;
    }
    return <Home />;
  };

  // Declare prop types
  AuthComponent.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

  return connectAuth(AuthComponent);
};

export default requireAuth;
