import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PropTypes from 'prop-types';
import './Loader.scss';

const Loader = () => (
  <div className="cg-loader">
    <FontAwesomeIcon className="cg-loader--icon" icon="cog" size="2x" spin />
  </div>
);

Loader.propTypes = {};

export default Loader;
