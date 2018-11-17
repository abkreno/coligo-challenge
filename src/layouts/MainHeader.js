import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../assets/img/avatar.jpg';
import DropDown from '../components/DropDown';
import Menu from '../components/Menu';
import MenuLink from '../components/MenuLink';

const MainHeader = ({ isLoggedIn, login, logout }) => (
  <div>
    {!isLoggedIn && <button onClick={login}>Login</button>}
    {isLoggedIn &&
    <DropDown
      menu={(
        <Menu>
          {[<MenuLink key={0} onClick={logout} text="Logout" icon="logout" />]}
        </Menu>)}
    >
      <img src={defaultAvatar} alt="Default Avatar" />
    </DropDown>}
  </div>
);

MainHeader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default MainHeader;
