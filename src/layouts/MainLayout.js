import React from 'react';
import PropTypes from 'prop-types';
import withAuth from '../withAuth';

const MainLayout = ({ children, isLoggedIn }) => (
  <div>
    <div>
      <h2>Welcome to Coligo <small>({isLoggedIn ? 'Logged In' : 'Logged Out'})</small></h2>
    </div>
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default withAuth(MainLayout);
