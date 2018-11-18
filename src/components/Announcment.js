import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

const Announcment = ({ text }) => (
  <li>
    <Avatar src="/assets/img/avatar.jpg" alt="" />  {text}
  </li>
);

Announcment.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Announcment;
