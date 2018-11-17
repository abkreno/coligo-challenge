import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ children }) => (
  <div className="cg-menu">
    {children}
  </div>
);

Menu.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Menu;
