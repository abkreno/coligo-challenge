import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/Menu';
import MenuLink from '../components/MenuLink';
import Sider from '../components/Sider';

const getSiderLinks = isLoggedIn => (isLoggedIn ? [{ text: 'Dashboard', icon: 'dashboard' }] : [{ text: 'Home', icon: 'home' }]);

const MainSider = ({ isLoggedIn }) => (
  <div>
    <Sider>
      <Menu>
        {getSiderLinks(isLoggedIn).map((link, idx) => <MenuLink key={idx} {...link} />)}
      </Menu>
    </Sider>
  </div>
);

MainSider.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default MainSider;
