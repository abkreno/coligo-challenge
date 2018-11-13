import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from './pages/Home';
import { loginUser, logoutUser } from './state/ducks/user/actions';

export const requireAuth = (component) => {
  const AuthComponent = (props) => {
    const {
      isLoggedIn,
      login,
      logout,
    } = props;
    if (isLoggedIn) {
      return component;
    }
    return <Home onLoginClick={() => login()} onLogoutClick={() => logout()} />;
  };

  // Declare prop types
  AuthComponent.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  // Connect to redux
  const mapStateToProps = state => ({
    isLoggedIn: state.userState.user.isLoggedIn,
  });

  const mapDispatchToProps = dispatch => ({
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
};

export default requireAuth;
