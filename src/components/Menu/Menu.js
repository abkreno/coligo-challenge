import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';

const Menu = ({ children }) => (
  <div className="cg-menu">
    {children}
  </div>
);

Menu.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Menu;
