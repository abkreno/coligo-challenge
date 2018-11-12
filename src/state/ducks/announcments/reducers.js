import { combineReducers } from 'redux';
import types from './types';
/* State shape
state: {
  announcments: [],
}
*/
const announcment = (state, action) => {
  switch (action.type) {
    case types.ADD_ANNOUNCEMENT:
      return {
        id: action.announcment.id,
        text: action.announcment.text,
      };
    default:
      return state;
  }
};

const announcments = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ANNOUNCEMENT:
      return [...state, announcment(undefined, action)];
    case types.SET_ANNOUNCEMENTS:
      return action.announcments;
    default:
      return state;
  }
};


const announcmentsReducer = combineReducers({
  announcments,
});

export default announcmentsReducer;
