import React from 'react';
import PropTypes from 'prop-types';
import Announcment from './Announcment';

const AnnouncmentList = ({ announcments, addAnnouncement }) => (
  <div>
    <ul>
      {announcments.map(announcment => (
        <Announcment key={announcment.id} {...announcment} />
      ))}
    </ul>
    <button onClick={() => addAnnouncement({
      id: 1,
      text: 'Hello World',
    })}
    >
      Add Announcment
    </button>
  </div>
);

AnnouncmentList.propTypes = {
  announcments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  addAnnouncement: PropTypes.func.isRequired,
};

export default AnnouncmentList;
