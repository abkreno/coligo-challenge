import { combineReducers } from 'redux';
import types from './types';
/* State shape
state: {
  isLoggedIn: false,
}
*/

const user = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, isLoggedIn: true };
    case types.LOGOUT_USER:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};


const userReducer = combineReducers({
  user,
});

export default userReducer;
