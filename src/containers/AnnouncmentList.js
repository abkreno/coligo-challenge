import { connect } from 'react-redux';
import AnnouncmentList from '../components/AnnouncmentList';
import { addAnnouncement } from '../state/ducks/announcments/actions';

const mapStateToProps = state => ({
  announcments: state.announcmentsState.announcments,
});

const mapDispatchToProps = dispatch => ({
  addAnnouncement: announcment => dispatch(addAnnouncement(announcment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncmentList);
