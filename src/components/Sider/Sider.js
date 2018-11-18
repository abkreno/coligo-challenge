import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuLink } from '../Menu';
import './Sider.scss';

const Sider = ({ title, links, className }) => (
  <div className={`cg-sider ${className}`}>
    <h2 className="cg-sider-title">{title}</h2>
    <Menu>
      {links.map((link, idx) => <MenuLink key={idx} {...link} />)}
    </Menu>
  </div>
);

Sider.propTypes = {
  links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Sider.defaultProps = {
  className: '',
};

export default Sider;
