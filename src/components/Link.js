import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ icon, text }) => (
  <li>
    {icon} {text}
  </li>
);

Link.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
