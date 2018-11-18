import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

const Avatar = ({
  src,
  alt,
}) => (
  <div className="cg-avatar" style={{ backgroundImage: `url(${src})` }} alt={alt} />
);

Avatar.propTypes = {
  src: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
