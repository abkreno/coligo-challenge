import React from 'react';
import PropTypes from 'prop-types';
import withAuth from '../withAuth';

const MainLayout = ({ children }) => (
  <div>
    <div>
      <h2>Welcome to Coligo</h2>
    </div>
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default withAuth(MainLayout);
