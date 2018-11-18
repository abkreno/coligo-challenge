import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import defaultAvatar from '../assets/img/avatar.jpg';
import DropDown from '../components/DropDown';
import Button from '../components/Button';

import { Menu, MenuLink } from '../components/Menu';
import Avatar from '../components/Avatar';
import './MainHeader.scss';
import Badge from '../components/Badge';
import Input from '../components/Input';

const MainHeader = ({
  isLoggedIn,
  login,
  logout,
  onBarsClick,
}) => (
  <div className="main-header">
    <div className="main-header-left">
      <FontAwesomeIcon className="main-header-bars" onClick={onBarsClick} icon="bars" size="2x" />
      <h2 className="main-header-title">
        {isLoggedIn ? 'Welcome Tanya,' : 'Home'}
      </h2>
    </div>
    <div className="main-header-right">
      {!isLoggedIn && <Button type="invert" icon="sign-in-alt" onClick={login}>Login</Button>}
      {isLoggedIn &&
      <Input icon="search" className="main-header-search" value="" placeholder="Search" />}
      {isLoggedIn &&
      <Badge className="main-header-badge" number={1}>
        <FontAwesomeIcon className="cg-menu-link--icon" size="2x" icon="bell" />
      </Badge>}
      {isLoggedIn &&
      <Badge className="main-header-badge" number={3}>
        <FontAwesomeIcon className="cg-menu-link--icon" size="2x" icon="envelope" />
      </Badge>}
      {isLoggedIn &&
      <DropDown
        menu={(
          <Menu>
            {[<MenuLink key={0} onClick={logout} text="Logout" icon="sign-out-alt" />]}
          </Menu>)}
      >
        <Avatar src="/assets/avatar.jpg" alt="Default Avatar" />
        {/* <img  /> */}
      </DropDown>}
    </div>
  </div>
);

MainHeader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  onBarsClick: PropTypes.func.isRequired,
};

export default MainHeader;
