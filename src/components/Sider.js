import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const Sider = ({ links }) => (
  <div>
    <ul>
      {links.map((link, idx) => (
        <Link key={idx} {...link} />
      ))}
    </ul>

  </div>
);

Sider.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Sider;
