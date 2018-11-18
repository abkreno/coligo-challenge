import React from 'react';
import PropTypes from 'prop-types';

const Quiz = ({ text }) => (
  <li>
    {text}
  </li>
);

Quiz.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Quiz;
