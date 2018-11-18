import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import './Announcement.scss';

const Announcment = ({ text, owner, subject }) => (
  <li className="cg-announcement">
    <div className="cg-announcement-info">
      <Avatar src="/assets/img/avatar.jpg" alt="" />
      <h5 className="cg-announcement-title">
        {owner}
        <br />
        <span className="cg-announcement-subject">
          {subject}
        </span>
      </h5>
    </div>
    <div className="cg-announcement-text">
      {text}
    </div>
  </li>
);

Announcment.propTypes = {
  text: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default Announcment;
