import React from 'react';
import PropTypes from 'prop-types';
import Announcment from './Announcment';

const AnnouncmentList = ({ announcments }) => (
  <ul>
    {announcments.map(announcment => (
      <Announcment key={announcment.id} {...announcment} />
    ))}
  </ul>
);

AnnouncmentList.propTypes = {
  announcments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default AnnouncmentList;
