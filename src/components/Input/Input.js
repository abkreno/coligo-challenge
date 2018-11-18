import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Input.scss';

const Input = ({
  icon,
  placeholder,
  className,
}) => (
  <div className={`cg-input-container ${className}`}>
    {icon.length > 0 && <FontAwesomeIcon className="cg-input--icon" icon={icon} /> }
    <input className="cg-input" placeholder={placeholder} />
  </div>
);

Input.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  icon: '',
  className: '',
};

export default Input;
