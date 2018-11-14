import React from 'react';
import PropTypes from 'prop-types';

const Sider = ({ children }) => (
  <div>
    {children}
  </div>
);

Sider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Sider;
