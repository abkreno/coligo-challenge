import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss';

const Button = ({
  icon,
  type,
  children,
  className,
  onClick,
}) => (
  <button className={`cg-btn cg-btn-${type} ${className}`} onClick={onClick} >
    {icon.length > 0 && <FontAwesomeIcon className="cg-btn--icon" icon={icon} /> }
    {children}
  </button>
);

Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  icon: '',
  className: '',
  onClick: () => null,
  type: 'default',
};

export default Button;
