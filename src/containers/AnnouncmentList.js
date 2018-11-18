import { connect } from 'react-redux';
import AnnouncmentList from '../components/AnnouncmentList';
import { addAnnouncement, fetchAnnouncments } from '../state/ducks/announcments/actions';

const mapStateToProps = state => ({
  announcments: state.announcmentsState.announcments,
  loading: state.announcmentsState.fetchAnnouncmentsStatus.loading,
  error: state.announcmentsState.fetchAnnouncmentsStatus.error,
});

const mapDispatchToProps = dispatch => ({
  addAnnouncement: announcment => dispatch(addAnnouncement(announcment)),
  fetchAnnouncments: () => dispatch(fetchAnnouncments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncmentList);
