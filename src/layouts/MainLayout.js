import React from 'react';
import PropTypes from 'prop-types';
import withAuth from '../withAuth';
import './MainLayout.scss';
import Sider from '../components/Sider';
import DropDown from '../components/DropDown';
import Menu from '../components/Menu';
import MenuLink from '../components/MenuLink';
import defaultAvatar from '../assets/img/avatar.jpg';

const getSiderLinks = isLoggedIn => (isLoggedIn ? [{ text: 'Dashboard', icon: 'dashboard' }] : [{ text: 'Home', icon: 'home' }]);

const MainLayout = ({
  children,
  isLoggedIn,
  login,
  logout,
}) => (
  <div className="layout layout-has-sider">
    <div className="layout-sider">
      <Sider>
        <Menu>
          {getSiderLinks(isLoggedIn).map((link, idx) => <MenuLink key={idx} {...link} />)}
        </Menu>
      </Sider>
    </div>
    <div className="layout-content">
      <div className="layout-header">
        <div className="layout-header-left">
          {isLoggedIn && <h1>Welcom Talia,</h1>}
        </div>
        <div className="layout-header-right">
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
      </div>
      <h2>Welcome to Coligo <small>({isLoggedIn ? 'Logged In' : 'Logged Out'})</small></h2>
      {children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default withAuth(MainLayout);
