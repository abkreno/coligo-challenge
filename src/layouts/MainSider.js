import React from 'react';
import PropTypes from 'prop-types';
import Sider from '../components/Sider/Sider';
import './MainSider.scss';

const getSiderLinks = isLoggedIn => (isLoggedIn ? [{ text: 'Dashboard', icon: 'dashboard' }] : [{ text: 'Home', icon: 'home' }]);

const MainSider = ({ isLoggedIn }) => (
  <Sider title="Coligo" links={getSiderLinks(isLoggedIn)} />
);

MainSider.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default MainSider;
