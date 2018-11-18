import { connect } from 'react-redux';
import { loginUser, logoutUser } from './state/ducks/user/actions';

// A HOC That takes a component and connects it to the auth state
const withAuth = (Component) => {
  const mapStateToProps = state => ({
    isLoggedIn: state.userState.user.isLoggedIn,
  });

  const mapDispatchToProps = dispatch => ({
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Component);
};


export default withAuth;
