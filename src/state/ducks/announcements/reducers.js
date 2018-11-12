import { combineReducers } from "redux";
import types from './types';
/* State shape
state: {
  announcements: [],
}
*/
const announcement = (state, action) => {
  switch (action.type) {
    case types.ADD_ANNOUNCEMENT:
      return {
        id: action.announcement.id,
        text: action.announcement.text,
      };
    default:
      return state;
  }
};

const announcements = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ANNOUNCEMENT:
      return [...state, announcement(undefined, action)];
    case types.SET_ANNOUNCEMENTS:
      return action.announcements;
    default:
      return state;
  }
};


const announcementsReducer = combineReducers({
  announcements,
});

export default announcementsReducer;
