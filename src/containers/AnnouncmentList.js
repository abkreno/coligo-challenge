import { connect } from 'react-redux';
import AnnouncmentList from '../components/AnnouncmentList';

const mapStateToProps = state => ({
  announcments: state.announcmentsState.announcments,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncmentList);
