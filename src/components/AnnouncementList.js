import React from 'react';
import PropTypes from 'prop-types';
import Announcement from './Announcement';

const AnnouncementList = ({ announcements }) => (
  <ul>
    {announcements.map(announcement => (
      <Announcement key={announcement.id} {...announcement} />
    ))}
  </ul>
);

AnnouncementList.propTypes = {
  announcements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

export default AnnouncementList;
