import React from 'react';
import PropTypes from 'prop-types';

const Announcment = ({ text }) => (
  <li>
    {text}
  </li>
);

Announcment.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Announcment;
