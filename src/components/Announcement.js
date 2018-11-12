import React from 'react';
import PropTypes from 'prop-types';

const Announcement = ({ text }) => (
  <li>
    {text}
  </li>
);

Announcement.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Announcement;
