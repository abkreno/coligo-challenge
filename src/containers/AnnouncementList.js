import { connect } from 'react-redux';
import AnnouncementList from '../components/AnnouncementList';

const mapStateToProps = state => ({
  announcements: state.announcementsState.announcements,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementList);
