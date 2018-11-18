import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({
  title,
  description,
  link,
  children,
  className,
}) => (
  <div className={`cg-card ${className}`}>
    <div className="cg-card-header">
      <div className="cg-card-header-left">
        <h3 className="cg-card-header-title">{title}</h3>
        <small className="cg-card-header-desc">{description}</small>
      </div>
      <div className="cg-card-header-right">
        <a href="http://localhost:8080">
          {link}
        </a>
      </div>
    </div>
    <div className="cg-card-content">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

export default Card;
