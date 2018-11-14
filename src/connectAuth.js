import { connect } from 'react-redux';
import { loginUser, logoutUser } from './state/ducks/user/actions';

const connectAuth = (Component) => {
  const mapStateToProps = state => ({
    isLoggedIn: state.userState.user.isLoggedIn,
  });

  const mapDispatchToProps = dispatch => ({
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Component);
};


export default connectAuth;
