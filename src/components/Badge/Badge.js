import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const Badge = ({
  number,
  children,
  className,
}) => (
  <div className={`cg-badge ${className}`}>
    <span className="cg-badge-number">{number}</span>
    {children}
  </div>
);

Badge.propTypes = {
  number: PropTypes.number.isRequired,
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
};

Badge.defaultProps = {
  className: '',
};

export default Badge;
