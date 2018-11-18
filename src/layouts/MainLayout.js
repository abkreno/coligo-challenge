import React from 'react';
import PropTypes from 'prop-types';
import withAuth from '../withAuth';
import './MainLayout.scss';
import MainHeader from './MainHeader';
import MainSider from './MainSider';

const MainLayout = ({
  children,
  isLoggedIn,
  login,
  logout,
  toggleSideBar,
}) => (
  <div className="layout-container">
    <div className="layout">
      <div className="layout-sider-container">
        <MainSider isLoggedIn={isLoggedIn} />
      </div>
      <div className="layout-header-container">
        <MainHeader
          isLoggedIn={isLoggedIn}
          login={login}
          logout={logout}
          onBarsClick={toggleSideBar}
        />
      </div>
      <div className="layout-content-container">
        {children}
      </div>
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};

export default withAuth(MainLayout);
