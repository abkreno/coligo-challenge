import React from 'react';
import PropTypes from 'prop-types';
import withAuth from '../withAuth';
import './MainLayout.scss';
import Sider from '../components/Sider';

const getSiderLinks = isLoggedIn => (isLoggedIn ? [{ text: 'Dashboard', icon: '' }] : [{ text: 'Login', icon: '' }]);

const MainLayout = ({ children, isLoggedIn }) => (
  <div className="layout layout-has-sider">
    <div className="layout-sider">
      <Sider links={getSiderLinks(isLoggedIn)} />
    </div>
    <div className="layout-content">
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
