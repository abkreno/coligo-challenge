import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuLink = ({ icon, text, onClick }) => (
  <li className="cg-menu-link">
    <button onClick={onClick} ><FontAwesomeIcon className="cg-menu-link--icon" icon={icon} /> {text}</button>
  </li>
);

MenuLink.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MenuLink.defaultProps = {
  onClick: () => null,
};

export default MenuLink;
