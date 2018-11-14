import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ children }) => (
  <div>
    <ul>
      {children}
    </ul>

  </div>
);

Menu.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Menu;
