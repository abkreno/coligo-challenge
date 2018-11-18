import React from 'react';
import PropTypes from 'prop-types';
import Sider from '../../components/Sider/Sider';
import './MainSider.scss';
import Input from '../../components/Input';

const getSiderLinks = isLoggedIn => (isLoggedIn ?
  [{ text: 'Dashboard', icon: 'home' },
    { text: 'Schedule', icon: 'calendar' },
    { text: 'Courses', icon: 'book' },
    { text: 'Gradebook', icon: 'graduation-cap' },
    { text: 'Performance', icon: 'chart-line' },
    { text: 'Announcement', icon: 'bullhorn' }] :
  [{ text: 'Home', icon: 'home' }]);

const MainSider = ({ isLoggedIn, isOpen }) => (
  <Sider className="main-sider" title="Coligo" isOpen={isOpen} links={getSiderLinks(isLoggedIn)}>
    {isLoggedIn &&
    <Input icon="search" className="main-sider-search" value="" placeholder="Search" />}
  </Sider>
);

MainSider.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MainSider;
