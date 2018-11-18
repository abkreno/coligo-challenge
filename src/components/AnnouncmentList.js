import React from 'react';
import PropTypes from 'prop-types';
import Announcment from './Announcment';
import Card from './Card/Card';
import Loader from './Loader/Loader';

class AnnouncmentList extends React.Component {
  componentDidMount() {
    const { fetchAnnouncments } = this.props;
    fetchAnnouncments();
  }

  render() {
    const { announcments, loading } = this.props;
    return (
      <Card title="Announcements" description="We educate warirors! Keep updated :)" link="All">
        {/* <button onClick={() => addAnnouncement({
          id: announcments.length + 1,
          text: `Announcement ${announcments.length + 1}`,
        })}
        >
          Add Announcment
        </button> */}
        { loading ? <Loader /> :
        <ul>
          {announcments.map(announcment => (
            <Announcment key={announcment.id} {...announcment} />
          ))}
        </ul> }
      </Card>
    );
  }
}

AnnouncmentList.propTypes = {
  announcments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  fetchAnnouncments: PropTypes.func.isRequired,
};

export default AnnouncmentList;
