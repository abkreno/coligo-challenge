import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({ children, menu }) => (
  <div>
    <ul>
      {menu}
      {children}
    </ul>
  </div>
);

DropDown.propTypes = {
  children: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired,
};

export default DropDown;
